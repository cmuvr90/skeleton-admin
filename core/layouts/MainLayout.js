import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Frame, ContextualSaveBar, Loading, Toast, Modal } from '@shopify/polaris'
import { TopBarMarkup } from '../../components/TopBarMarkup'
import { NavigationMarkup } from '../../components/NavigationMarkup'
import { onChangeMessage, onResetModal } from '../redux/actions/layoutActions'

/**
 *
 * @param Template
 * @returns
 */
export const MainLayout = Template => props => {
    const dispatch = useDispatch()

    const loading = useSelector(state => state.layout.loading)
    const message = useSelector(state => state.layout.message)
    const modal = useSelector(state => state.layout.modal)
    const topBar = useSelector(state => state.layout.topBar)

    const logo = {
        width: 50,
        topBarSource: 'https://sun6-22.userapi.com/s/v1/if1/1L7AV_Vxv9WBrLRZg8_FmtqF_gZxJEraUrkwioEm72UMNxebDmSqy6BUzyAxYBET1ie1GcUq.jpg?size=100x100&quality=96&crop=0,0,500,500&ava=1',
        contextualSaveBarSource: 'https://sun6-22.userapi.com/s/v1/if1/1L7AV_Vxv9WBrLRZg8_FmtqF_gZxJEraUrkwioEm72UMNxebDmSqy6BUzyAxYBET1ie1GcUq.jpg?size=100x100&quality=96&crop=0,0,500,500&ava=1',
        url: 'http://localhost:3001',
        accessibilityLabel: 'SPRABY',
    }

    const [mobileNavigationActive, setMobileNavigationActive] = useState(false)

    /**
     *
     * @type {JSX.Element|null}
     */
    const loadingMarkup = loading ? <Loading /> : null

    /**
     *
     * @type {*|null}
     */
    const toastMarkup = message ? message.content.map(i =>
        <Toast key={i} {...message} content={i} onDismiss={() => dispatch(onChangeMessage())} />,
    ) : null

    /**
     *
     * @type {JSX.Element}
     */
    const modalMarkup = <Modal
        large={modal.large}
        open={modal.open}
        onClose={() => dispatch(onResetModal())}
        title={modal.title}
        primaryAction={modal.primaryAction}
        secondaryActions={modal.secondaryActions}
        loading={modal.loading}
    >
        <Modal.Section>{modal.content}</Modal.Section>
    </Modal>

    /**
     *
     * @type {JSX.Element|null}
     */
    const contextualSaveBarMarkup = topBar.active ? <ContextualSaveBar
        message={topBar.title}
        saveAction={topBar.saveAction}
        discardAction={topBar.discardAction}
        alignContentFlush={topBar.alignContentFlush}
        fullWidth={topBar.fullWidth}
        contextControl={topBar.contextControl}
        secondaryMenu={topBar.secondaryMenu}
    /> : null

    /**
     *
     * @type {function(): void}
     */
    const toggleMobileNavigationActive = useCallback(() => setMobileNavigationActive(v => !v), [])

    return <Frame
        logo={logo}
        topBar={<TopBarMarkup toggleMobileNavigationActive={toggleMobileNavigationActive} />}
        navigation={<NavigationMarkup router={props.router} />}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
    >
        {contextualSaveBarMarkup}
        {loadingMarkup}
        {toastMarkup}
        {modalMarkup}
        <Template {...props} />
    </Frame>
}

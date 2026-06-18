import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Container from './src/container.vue'
import Header from './src/header.vue'
import Aside from './src/aside.vue'
import Main from './src/main.vue'
import Footer from './src/footer.vue'
export const AkContainer = withInstall(Container)
export const AkHeader = withInstall(Header)
export const AkAside = withInstall(Aside)
export const AkMain = withInstall(Main)
export const AkFooter = withInstall(Footer)
export const AkContainerWithAll = withInstallMultiple(Container, [Header, Aside, Main, Footer])
export default AkContainer

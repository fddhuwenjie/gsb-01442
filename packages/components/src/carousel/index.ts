import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Carousel from './src/carousel.vue'
import CarouselItem from './src/carousel-item.vue'
export const AkCarousel = withInstall(Carousel)
export const AkCarouselItem = withInstall(CarouselItem)
export const AkCarouselWithItem = withInstallMultiple(Carousel, [CarouselItem])
export default AkCarousel

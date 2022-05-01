import styles from './HomePage.module.css'
import css from 'classnames'
import { Carousel } from 'antd'

import img1 from '../../picture/img1.jpeg'
import img2 from '../../picture/img2.jpg'
import img3 from '../../picture/img3.jpeg'
import img4 from '../../picture/img4.jpeg'
import img8 from '../../picture/img8.jpeg'
import img12 from '../../picture/img12.jpeg'
import img13 from '../../picture/img13.jpeg'
import img14 from '../../picture/img14.jpeg'
import img16 from '../../picture/img16.jpeg'
import img17 from '../../picture/img17.jpeg'

import { SiBuymeacoffee } from 'react-icons/si'
import { RiDoubleQuotesR } from 'react-icons/ri'
import { useNavbarContext } from '../../context/NavbarContext'

export function HomePage() {
  const { isNavbarOpen } = useNavbarContext()
  return (
    <div>
      {!isNavbarOpen && (
        <Carousel autoplay autoplaySpeed={5000} draggable>
          <div className={styles.carousel}>
            <div className={styles.coverTextIncarousel}>
              <img src={img1} className={styles.img1} />
              <div className={styles.textIncarousel}>
                <h3>WELCOME TO OUR SHOP</h3>
                <p>
                  Coffee Shop is the place where you can get flavorful coffee
                  strains from global elite brands and roasters at very
                  affordable price.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.carousel}>
            <div className={styles.coverTextIncarousel}>
              <img src={img2} className={styles.img2} />
              <div className={styles.textIncarousel}>
                <h3>IT'S JUST BEFORE THE COFFEE SHOP</h3>
                <p>
                  We provide a variety of services both to our new and regular
                  customers. If you can think of anything connected with coffee,
                  then we can offer it at our Coffee Shop.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.carousel}>
            <div className={styles.coverTextIncarousel}>
              <img src={img3} className={styles.img3} />
              <div className={styles.textIncarousel}>
                <h3>AMAZING TASTE & BEAUTIFUL PLACE</h3>
                <p>
                  Coffee shops have come a long way in recent years. From the
                  functional cafes of the past to the artisan creative spaces we
                  have today. While this is great for the consumer, it means
                  coffee shop owners need to up their game to compete in the
                  current market.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.carousel}>
            <div className={styles.coverTextIncarousel}>
              <img src={img4} className={styles.img4} />
              <div className={styles.textIncarousel}>
                <h3>ELITE COFFEE BRANDS</h3>
                <p>
                  Fortunately, creating an effective website for your business
                  just got a lot easier, thanks to the options in this
                  collection of the best coffee shop WordPress themes.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      )}

      <div className={styles.part2}>
        <div>OUR PRODUCT</div>
        <div className={styles.coverBox}>
          <div className={styles.leftBox}>
            <h4>Coffee</h4>
            <p className={styles.textInBox}>
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain flowering plants in the Coffea
              genus.
            </p>
          </div>
          <SiBuymeacoffee size={200} className={styles.ourProductIcon} />
          <div className={styles.rightBox}>
            <h4>Soda</h4>
            <p className={styles.textInBox}>
              An Italian soda is a soft drink made from carbonated water and
              flavored syrup. Flavors can be fruit or modeled after the flavors
              of desserts, spices, or other beverages.
            </p>
            <br />
            <h4>Milk</h4>
            <p className={styles.textInBox}>
              Milk is a nutrient-rich liquid food produced by the mammary glands
              of mammals. It is the primary source of nutrition for young
              mammalsbefore they are able to digest solid food.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.part3}>
        <h4 className={styles.headP3}>SIGNATURE MENU</h4>
        <div className={styles.containerImg}>
          <div className={styles.coverImg}>
            <div className={styles.imgBox1} title="Latte">
              <img src={img8} className={styles.img} />
            </div>
          </div>
          <div className={styles.coverImg}>
            <div className={styles.imgBox1} title="Cappuccino">
              <img src={img12} className={styles.img} />
            </div>
          </div>
          <div className={styles.coverImg}>
            <div className={styles.imgBox1} title="Americano">
              <img src={img13} className={styles.img} />
            </div>
          </div>
          <div className={styles.coverImg}>
            <div className={styles.imgBox1} title="Espresso">
              <img src={img14} className={styles.img} />
            </div>
          </div>
          <div className={styles.coverImg}>
            <div className={styles.imgBox1} title="Mocha">
              <img src={img16} className={styles.img} />
            </div>
          </div>
          <div className={styles.coverImg}>
            <div className={styles.imgBox1} title="Long Black ">
              <img src={img17} className={styles.img} />
            </div>
          </div>
        </div>
        <div className={styles.coverCarouselMobile}>
          {!isNavbarOpen && (
            <Carousel autoplaySpeed={5000} draggable arrows>
              <div className={styles.coverImgMobile}>
                <div className={styles.imgBox1} title="Latte">
                  <img src={img8} className={styles.imgMoboile} />
                </div>
              </div>
              <div className={styles.coverImgMobile}>
                <div className={styles.imgBox1} title="Cappuccino">
                  <img src={img12} className={styles.imgMoboile} />
                </div>
              </div>
              <div className={styles.coverImgMobile}>
                <div className={styles.imgBox1} title="Americano">
                  <img src={img13} className={styles.imgMoboile} />
                </div>
              </div>
              <div className={styles.coverImgMobile}>
                <div className={styles.imgBox1} title="Espresso">
                  <img src={img14} className={styles.imgMoboile} />
                </div>
              </div>
              <div className={styles.coverImgMobile}>
                <div className={styles.imgBox1} title="Mocha">
                  <img src={img16} className={styles.imgMoboile} />
                </div>
              </div>
              <div className={styles.coverImgMobile}>
                <div className={styles.imgBox1} title="Long Black ">
                  <img src={img17} className={styles.imgMoboile} />
                </div>
              </div>
            </Carousel>
          )}
        </div>
      </div>

      <div className={styles.coverCarousel}>
        {!isNavbarOpen && (
          <Carousel autoplay autoplaySpeed={5000} draggable>
            <div className={styles.caption}>
              <div className={styles.textCaption}>
                <RiDoubleQuotesR className={styles.imgCaption} />
                <h4>Life happen, coffee helps.</h4>
              </div>
            </div>
            <div className={styles.caption}>
              <div className={styles.textCaption}>
                <RiDoubleQuotesR className={styles.imgCaption} />
                <h4>Coffee knows how to heal my loneliness.</h4>
              </div>
            </div>
            <div className={styles.caption}>
              <div className={styles.textCaption}>
                <RiDoubleQuotesR className={styles.imgCaption} />
                <h4>The road to success is pabed in Coffee.</h4>
              </div>
            </div>
            <div className={styles.caption}>
              <div className={styles.textCaption}>
                <RiDoubleQuotesR className={styles.imgCaption} />
                <h4>Coffee is like a hug in a mug.</h4>
              </div>
            </div>
          </Carousel>
        )}
      </div>
    </div>
  )
}

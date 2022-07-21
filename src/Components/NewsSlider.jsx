import React from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import news from "../Components/newsSlider.module.css";

// const responsiveSettings = [
//     {
//         breakpoint: 800,
//         settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3
//         }
//     },
//     {
//         breakpoint: 500,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//         }
//     }
// ];
const NewsSlider = () => {
  return (
    <div className={news.newsDiv}>
      {/* <Slide slidesToScroll={1} slidesToShow={5} indicators={true} responsive={responsiveSettings}> */}
      {/* children here */}
      <div>
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={true}
          autoplay={false}
          responsive={[
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ]}
        >
          <a href="https://www.livemint.com/brand-stories/licious-is-india-s-first-animal-protein-brand-to-be-certified-with-sa8000-11655299956590.html">
            <div
              style={{
                textAlign: "center",
                // background: 'red',
                padding: "200px 0",
                fontSize: "15px",
              }}
            >
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/35/inthenews_62aadde78bdae"
                alt=""
              />
              <p>
                Licious Is India's First Animal Protein Brand to be Certified
                With SA8000
              </p>
            </div>
          </a>

          <a href="https://yourstory.com/2021/11/licious-continuous-liquidity-esops-daily-vesting/amp">
            <div
              style={{
                textAlign: "center",
                // background: 'orange',
                padding: "200px 0",
                fontSize: "15px",
              }}
            >
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/35/inthenews_62aadde78bdae"
                alt=""
              />
              <p>
                Licious Is India's First Animal Protein Brand to be Certified
                With SA8000
              </p>
            </div>
          </a>

          <a href="https://the-ken.com/story/why-licious-wants-to-become-the-everything-store-for-meat/">
            <div
              style={{
                textAlign: "center",
                // background: 'yellow',
                padding: "200px 0",
                fontSize: "15px",
              }}
            >
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/37/inthenews_62aae0b741820"
                alt=""
              />
              <p>
                Licious Is India's First Animal Protein Brand to be Certified
                With SA8000
              </p>
            </div>
          </a>

          <a href="https://techcrunch.com/2021/10/04/indias-licious-becomes-unicorn-with-52-million-fresh-fundraise/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAJsY4AO5qhGFiCINIbIEefvNH1pEJGQoQo23tmsT-4z0LpgIlaxu6gpaLXSalcW_w8POFnwysukGe2NRosnALyiitu2a2xJbDdc_gAPJ2TuMrANXuOpklEg_DyIhBwmDiA1x4qEs8HSrMNZCbcYMXS37mRutfgTJXIkiKk2XBUNN">
            <div
              style={{
                textAlign: "center",
                // background: 'green',
                padding: "200px 0",
                fontSize: "15px",
              }}
            >
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/39/inthenews_62aae1c5de08e"
                alt=""
              />
              <p>
                Licious Is India's First Animal Protein Brand to be Certified
                With SA8000
              </p>
            </div>
          </a>

          <a href="https://www.moneycontrol.com/news/business/startup/they-slayed-covid-went-on-to-build-a-unicorn-meet-the-founders-of-licious-7551971.html">
            <div
              style={{
                textAlign: "center",
                // background: 'blue',
                padding: "200px 0",
                fontSize: "15px",
              }}
            >
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/40/inthenews_62aae21e9a38e"
                alt=""
              />
              <p>
                Licious Is India's First Animal Protein Brand to be Certified
                With SA8000
              </p>
            </div>
          </a>

          <a href="https://yourstory.com/2021/10/techsparks-2021-licious-founders-unicorn-startup-india/amp">
            <div
              style={{
                textAlign: "center",

                padding: "200px 0",
                fontSize: "15px",
              }}
            >
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/40/inthenews_62aae21e9a38e"
                alt=""
              />
              <p>
                Licious Is India's First Animal Protein Brand to be Certified
                With SA8000
              </p>
            </div>
          </a>

          <a href="https://yourstory.com/2021/10/techsparks-2021-licious-founders-unicorn-startup-india/amp">
            <div
              style={{
                textAlign: "center",
                // background: 'violet',
                padding: "200px 0",
                fontSize: "15px",
              }}
            >
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/42/inthenews_62aae2a6d9bc4"
                alt=""
              />
              <p>
                Licious Is India's First Animal Protein Brand to be Certified
                With SA8000
              </p>
            </div>
          </a>

          <a href="https://www.fortuneindia.com/enterprise/licious-wants-you-to-eat-more-meat/106126">
            <div
              style={{
                textAlign: "center",
                // background: 'violet',
                padding: "200px 0",
                fontSize: "15px",
              }}
            >
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/43/inthenews_62aae2dadd8aa"
                alt=""
              />
              <p>
                Licious Is India's First Animal Protein Brand to be Certified
                With SA8000
              </p>
            </div>
          </a>

          <a href="https://www.livemint.com/brand-post/licious-pledges-to-be-esg-compliant-in-the-next-12-months-11621595684344.html">
            <div
              style={{
                textAlign: "center",
                // background: 'violet',
                padding: "200px 0",
                fontSize: "15px",
              }}
            >
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/44/inthenews_62aae32108c39"
                alt=""
              />
              <p>
                Licious Is India's First Animal Protein Brand to be Certified
                With SA8000
              </p>
            </div>
          </a>

          <a href="https://www.livemint.com/industry/advertising/online-meat-startup-licious-unveils-ads-featuring-anil-kapoor-arjun-kapoor-11622715951673.html">
            <div
              style={{
                textAlign: "center",
                // background: 'violet',
                padding: "200px 0",
                fontSize: "15px",
              }}
            >
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/45/inthenews_62aae4c4d8331"
                alt=""
              />
              <p>
                Licious Is India's First Animal Protein Brand to be Certified
                With SA8000
              </p>
            </div>
          </a>

          <a href="https://brandequity.economictimes.indiatimes.com/news/advertising/fasterchef-treats-uninvited-friends-with-licious/85766547">
            <div
              style={{
                textAlign: "center",
                // background: 'violet',
                padding: "200px 0",
                fontSize: "15px",
              }}
            >
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/35/inthenews_62aadde78bdae"
                alt=""
              />
              <p>
                Licious Is India's First Animal Protein Brand to be Certified
                With SA8000
              </p>
            </div>
          </a>

          {/* </Slide> */}
        </Slide>
      </div>
    </div>
  );
};

export default NewsSlider;

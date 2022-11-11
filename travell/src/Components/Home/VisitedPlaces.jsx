import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import jammu from "../../Images/images/jammu.png";
import bengal from "../../Images/images/bengal.png";
import bihar from "../../Images/images/bihar.png";
import delhi from "../../Images/images/delhi.png";
import goa from "../../Images/images/goa.png";
import gujrat from "../../Images/images/gujrat.png";
import haryana from "../../Images/images/haryana.png";
import himachal from "../../Images/images/himachal.png";
import karnataka from "../../Images/images/karnataka.png";
import kerala from "../../Images/images/kerala.png";
import maharashtra from "../../Images/images/maharashtra.png";
import punjab from "../../Images/images/punjab.png";
import rajasthan from "../../Images/images/rajasthan.png";

export default function VisitedPlaces() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div class="client_section layout_padding">
        <div class="container">
          <h1 class="client_taital">States Covered</h1>
          <div class="client_section_2">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <Carousel
                responsive={responsive}
                arrows={false}
                showDots={false}
                autoPlay
                pauseOnHover={false}
                infinite
                autoPlaySpeed={3500}
>
                <div>
                  <div className="heading_text">Jammu</div>
                  <div className="img_align ">
                    <img
                      src={jammu}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                  <div>
                    Encompassed by mountain crests, rich green valleys,
                    sparkling lakes, sanctuaries and marvelous Mughal-era
                    gardens, it has motivated artists through centuries. Kashmir
                    is confused by chinar tree-lined streets and curious wooden
                    bridges; and is domestic to bustling bazaars, sufi sanctums
                    and posts.
                  </div>
                </div>
                <div>
                  <div className="heading_text">Karnataka</div>
                  <div className="img_align">
                    <img
                      src={karnataka}
                      style={{ width: "200px", height: "230px" }}
                      alt=""
                    />
                  </div>
                  <div>
                    Karnataka is fundamentally known for its Legacy goals and
                    its Natural life/ National Parks. Separated from that, it is
                    additionally popular for its enchanted slope stations,
                    marvelous waterfalls, journey centres and a 320km long
                    coastline specked with un-spoilt shorelines.
                  </div>
                </div>
                <div>
                  <div className="heading_text">kerala</div>
                  <div className="img_align">
                    <img
                      src={kerala}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                  <div>
                    Kerala is favored with a special set of geological
                    highlights that have made it one of the foremost looked for
                    after visitor goals in Asia. A long shoreline with peaceful
                    shorelines, serene extends of emerald backwaters, lavish
                    slope stations and exotic wildlife, are fair many of the
                    ponders.
                  </div>
                </div>
                <div>
                  <div className="heading_text">maharashtra</div>
                  <div className="img_align">
                    <img
                      src={maharashtra}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                  <div>
                    The soul of Maharashtra is catholic, forward-thinking,
                    tolerant and dynamic. There's sufficient to keep experts of
                    sanctuaries, fortifications, ancient landmarks and
                    art---gainfully distracted here. Posts have played a vital
                    part within the history of the state, given the rough
                    landscape of the Sahyadris.
                  </div>
                </div>
                <div>
                  <div className="heading_text">punjab</div>
                  <div className="img_align">
                    <img
                      src={punjab}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                  <div>
                    The state of Punjab is known for various reasons. It is
                    known as 'the arrive of five rivers' as a result of the
                    fertile lands found here, it is additionally among one of
                    the foremost antiquated civilizations within the world. This
                    put is wealthy with culture and full of magnificence that
                    you simply ought to involvement first-hand.
                  </div>
                </div>
                <div>
                  <div className="heading_text">Rajasthan</div>
                  <div className="img_align">
                    <img
                      src={rajasthan}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                  <div>
                    Rajasthan is the kind of goal that combines experience and
                    unwinding and makes for an exceptional occasion. It’s not
                    close to posts and royal residences; it goes past that with
                    a small something for each kind of voyager. From tree houses
                    to courageous chasing ventures, you may be astounded at all
                    the encounters Rajasthan must offer.
                  </div>
                </div>
                <div>
                  <div className="heading_text">Goa</div>
                  <div className="img_align">
                    <img
                      src={goa}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                  <div>
                    The state of Goa, in India, is popular for its shorelines
                    and places of revere. Tourism is its essential industry, and
                    is by and large centered on the coastal regions of Goa, with
                    diminished visitor movement inland.
                  </div>
                </div>
                <div>
                  <div className="heading_text">Gujrat</div>
                  <div className="img_align">
                    <img
                      src={gujrat}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                  <div>
                    gujrat is eminent for its shorelines, sanctuary towns and
                    memorable capitals. Natural life havens, slope resorts and
                    normal greatness are blessings of Gujarat. Design,
                    painstaking work, expressions, celebrations moreover make
                    the state wealthy.
                  </div>
                </div>
                <div>
                  <div className="heading_text">Haryana</div>
                  <div className="img_align">
                    <img
                      src={haryana}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                  <div>
                    The title Haryana implies the home of God. It could be a
                    blend of two Sanskrit words ‘Hari’ which implies God and
                    ‘ayana’ meaning domestic. It could be a arrive where
                    visitors are treated break even with to god.From being
                    alluded to as ‘heaven on earth’ in antiquated Sanskrit
                    writings to being the bedrock of Indus valley civilization,
                    Haryana has one of the foremost one of a kind histories.
                  </div>
                </div>
                <div>
                  <div className="heading_text">Himachal</div>
                  <div className="img_align">
                    <img
                      src={himachal}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                  <div>
                    From tremendous tracts of high-altitude Trans-Himalayan
                    leave to thick green deodar timberlands, from apple
                    plantations to developed porches, from snow capped tall
                    Himalayan mountain ranges to snow encouraged lakes and
                    spouting waterways. Himachal could be a nature lover's
                    genuine enchant.
                  </div>
                </div>
                <div>
                  <div className="heading_text">Bengal</div>
                  <div className="img_align">
                    <img
                      src={bengal}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                  <div>
                    Bengal's divine magnificence and breathtaking scenes could
                    be a dream come genuine for sightseers who need to relish
                    the ponders of nature. From the sun-kissed crests of
                    Kanchenjunga to the lavish green tea gardens of the “Queen
                    of the hill-stations”, Darjeeling in North Bengal is
                    basically wonderment motivating.
                  </div>
                </div>
                <div>
                  <div className="heading_text">Bihar</div>
                  <div className="img_align">
                    <img
                      src={bihar}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                  <div>
                    Bihar's relic is obvious from its title, which is inferred
                    from the old word "VIHARA" (religious community). It is
                    undoubtedly a arrive of cloisters. Hindu, Buddhist, Jain,
                    Muslim and Sikh holy places flourish in this old arrive
                    where India's to begin with major realms rose and fell.
                    Where the ruins of the worlds' most punctual college sleeps
                    within the void of time.
                  </div>
                </div>
                <div>
                  <div className="heading_text">Delhi</div>
                  <div className="img_align">
                    <img
                      src={delhi}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                  <div>
                    The capital city of unimaginable India, Delhi gives you an
                    understanding into the rest of the nation with its edges
                    brimming with a large number of societies from over the
                    subcontinent. Anybody who has went through sufficient time
                    within the city offers a love-hate relationship with it but
                    there’s no denying that Delhi has as well numerous charms to
                    take the appear and those peculiarities make it one of the
                    leading cities within the world.
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

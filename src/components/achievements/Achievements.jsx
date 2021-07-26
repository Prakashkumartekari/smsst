import React from "react";
import "./achievements.css";
import image5 from '../../assets/images/5.jpeg'
import {Waypoint} from "react-waypoint"
import CountUp  from "react-countup"

function Achievements() {
 
    const changed = (start)=>start()
  return (
    <>
      <div className="achieve_section">
        <h1 className="title">उपलब्धियों</h1>
        <div className="achievementsWrapper">
          <div className="achievement_1">
            <div className="img_container">
              <img
                src={image5}
                alt="achievement_1"
              />
            </div>
            <div className="content_container">
              <h1>एम्बुलेंस सहायता</h1>
              <p>
              श्री मानव समिति ट्रस्ट द्वारा विभिन्न जगहों तक एम्बुलेंस सहायता पहुंचाई गई |
              </p>
              <div className="counter_container">
                <div className="first_counter">
                <CountUp start={0} end={7} delay={.5} duration={5} suffix={"+"}>
                {({ countUpRef, start }) => (
                  <>
                <Waypoint onEnter={()=>changed(start)} />
                  <h3 className="counter" ref={countUpRef}>0</h3>
                  </>
                )}
                  </CountUp>
                  <p>States</p>
                </div>
                <div className="second_counter">
                  <CountUp start={0} end={500} delay={.5} duration={5} suffix={"+"}>
                {({ countUpRef, start }) => (
                  <>
                <Waypoint onEnter={()=>changed(start)} />
                  <h3 className="counter" ref={countUpRef}>0</h3>
                  </>
                )}
                  </CountUp>
                  <p >Total</p>
                </div>
                
              </div>
            </div>
          </div>

          <div className="achievement_2">
            <div className="content_container">
              <h1>वर्दी वितरण</h1>
              <p>
              श्री मानव समिति ट्रस्ट द्वारा विभिन्न स्कूलों में वर्दी वितरण किया गया |
              </p>
              <div className="counter_container">
                <div className="first_counter">
                <CountUp start={0} end={50} delay={.5} duration={5} suffix={"+"}>
                {({ countUpRef, start }) => (
                  <>
                <Waypoint onEnter={()=>changed(start)} />
                  <h3 className="counter" ref={countUpRef}>0</h3>
                  </>
                )}
                  </CountUp>
                  <p>Place</p>
                </div>
                <div className="second_counter">
                <CountUp start={0} end={5000} delay={.5} duration={5} suffix={"+"}>
                {({ countUpRef, start }) => (
                  <>
                <Waypoint onEnter={()=>changed(start)} />
                  <h3 className="counter" ref={countUpRef}>0</h3>
                  </>
                )}
                  </CountUp>
                  <p >Total</p>
                </div>
              </div>
            </div>
            <div className="img_container">
              <img
                src={image5}
                alt="achievement_1"
              />
            </div>
          </div>
          <div className="achievement_3">
            <div className="img_container">
              <img
                src={image5}
                alt="achievement_1"
              />
            </div>
            <div className="content_container">
              <h1>वृक्षारोपण</h1>
              <p>
              श्री मानव समिति ट्रस्ट द्वारा विभिन्न जगहों पर वृक्षारोपण किया गया |
              </p>
              <div className="counter_container">
                <div className="first_counter">
                <CountUp start={0} end={100} delay={.5} duration={5} suffix={"+"}>
                {({ countUpRef, start }) => (
                  <>
                <Waypoint onEnter={()=>changed(start)} />
                  <h3 className="counter" ref={countUpRef}>0</h3>
                  </>
                )}
                  </CountUp>
                  <p>Place</p>
                </div>
                <div className="second_counter">
                <CountUp start={0} end={100000} delay={.5} duration={5} suffix={"+"}>
                {({ countUpRef, start }) => (
                  <>
                <Waypoint onEnter={()=>changed(start)} />
                  <h3 className="counter" ref={countUpRef}>0</h3>
                  </>
                )}
                  </CountUp>
                  <p >Total</p>
                </div>
              </div>
            </div>
          </div>
          <div className="achievement_4">
           
            <div className="content_container">
              <h1>अंतिम संस्कार</h1>
              <p>
              श्री मानव सेवा समिति ट्रस्ट द्वारा विभिन्न जगहों पर  किये गये अंतिम संस्कार |
              </p>
              <div className="counter_container">
                <div className="first_counter">
                <CountUp start={0} end={100} delay={.5} duration={5} suffix={"+"}>
                {({ countUpRef, start }) => (
                  <>
                <Waypoint onEnter={()=>changed(start)} />
                  <h3 className="counter" ref={countUpRef}>0</h3>
                  </>
                )}
                  </CountUp>
                  <p>Places</p>
                </div>
                <div className="second_counter">
                <CountUp start={0} end={200} delay={.5} duration={5} suffix={"+"}>
                {({ countUpRef, start }) => (
                  <>
                <Waypoint onEnter={()=>changed(start)} />
                  <h3 className="counter" ref={countUpRef}>0</h3>
                  </>
                )}
                  </CountUp>
                  <p >Total</p>
                </div>
              </div>
            </div>
             <div className="img_container">
              <img
                src={image5}
                alt="achievement_1"
              />
            </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default Achievements;

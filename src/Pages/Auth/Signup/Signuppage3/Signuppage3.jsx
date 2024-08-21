import React from 'react'
import "./signuppage3.css"
import { Link } from 'react-router-dom'
import logo from "../../../../assert/netflix.svg"
import Button from '../../../../components/button/Button'
import Text from '../../../../components/textbox/Text'
// import FooterSignin from "../../../../components/FooterSignin/Footersignin"
import Footersignin from '../../../../components/footersignin/Footersignin'
import Language2 from '../../../../components/language/Language2'

const Signuppage3 = () => {
    return (
        <div className='Signuppage3'>
            <div className="upheader">
                <img src={logo} alt="" className='Netflix-logo1' />
                <Link to={"/Signout"}>
                    <Button content={"Sign Out"} name={"Signupbutt"} />
                </Link>
            </div>
            <hr style={{ marginTop: "-100px" }} />
            <div className="upcontent">
                <div className="upcontent-1">
                    <Text value={"STEP 2 OF 3"} />
                    <Text value={"Choose the plan that’s right for you"} classname={"upcontent1-2"} />
                </div>


                <div className="updiv">
                    <div className="upcontentdiv">
                        <div className="upcontentdiv1">
                            <Text value={<pre>Premium <br />4K + HDR</pre>} />
                        </div>
                        <div className="upcontentdiv2">
                            <Text value={<pre>Monthly price <br />₹649</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Video and sound quality <br />Best</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Resolution <br />4K (Ultra HD) + HDR</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Spatial audio (immersive sound) <br />Included</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Supported devices <br />TV, computer, mobile phone, tablet</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Devices your household can watch at <br />the same time <br />4</pre>} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Download devices <br />6</pre>} />
                        </div>
                    </div>



                    <div className="contentdiv">
                        <div className="upcontentdiv1">
                            <Text value={<pre>Standard <br />1080p</pre>} />
                        </div>
                        <div className="upcontentdiv2">
                            <Text value={<pre>Monthly price <br />₹499</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Video and sound quality <br />Great</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Resolution <br />1080p (Full HD)</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Supported devices <br />TV, computer, mobile phone, tablet</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Devices your household can watch at <br />the same time <br />2</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Download devices <br />2</pre>} />
                        </div>
                    </div>


                    <div className="contentdiv">
                        <div className="upcontentdiv1">
                            <Text value={<pre>Basic <br />720p</pre>} />
                        </div>
                        <div className="upcontentdiv2">
                            <Text value={<pre>Monthly price <br />₹199</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Video and sound quality <br />Good</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Resolution <br />720p (HD)</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Supported devices <br />TV, computer, mobile phone, tablet</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Devices your household can watch at <br />the same time <br />1</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Download devices <br />1</pre>} />
                        </div>
                    </div>


                    <div className="contentdiv">
                        <div className="upcontentdiv1">
                            <Text value={<pre>Mobile <br />480p</pre>} />
                        </div>
                        <div className="upcontentdiv2">
                            <Text value={<pre>Monthly price <br />₹149</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Video and sound quality <br />Fair</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Resolution <br />480p</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Supported devices <br />Mobile phone, tablet</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Devices your household can watch at <br />the same time <br />1</pre>} classname={"upcontentdiv2text"} />
                            <hr style={{ width: "250px", marginLeft: "-10px" }} />
                            <Text value={<pre>Download devices <br />1</pre>} />
                        </div>
                    </div>
                </div>
                <Text classname={"upcontenttext"} value={<pre>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details. <br />
                    Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</pre>} />

                <Button content={"Next"} name={"upcontentbutt"} />
            </div>
            <div className="signup-footer">
                <br /><Text value={"Questions? Call 000-800-919-1694"} classname={"ques-signup"} />
                <div className="signup-footer1">
                    <Footersignin content={"FAQ"} name={"foot"} />
                    <Footersignin content={"Help Centre"} name={"foot"} />
                    <Footersignin content={"Netflix Shop"} name={"foot"} />
                    <Footersignin content={"Terms of Use"} name={"foot"} />
                    <Footersignin content={"Privacy"} name={"foot"} />
                    <Footersignin content={"Cookie Preferences"} name={"foot"} />
                    <Footersignin content={"Corporate Information"} name={"foot"} />

                </div>
                <Language2 name={"langsignup1"} value={"langup1"} id={"worldsvg"} />
            </div>
        </div>
    )
}

export default Signuppage3

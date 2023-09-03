import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import "./contact.css"

const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerWidth flexCenter con-container">
            <div className="flexColStart con-left">
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>e always ready to help by providing the best services for you <br/>
                    we beleiving a good blace to live can make your life better</span>

                <div className="contactModes">
                    {/** First mode */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexStart icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText'>021 123 456 78</span>
                            </div>
                         </div>
                            <div className="flexCenter button">Call</div>                
                        </div>
                    </div>     
                    {/** Second mode */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexStart icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                <span className='primaryText'>Chat</span>
                                <span className='secondaryText'>021 123 456 78</span>
                            </div>
                         </div>
                            <div className="flexCenter button">Chat</div>                
                        </div>
                    </div>
                    {/** Third mode */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexStart icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                <span className='primaryText'>Video Call</span>
                                <span className='secondaryText'>021 123 456 78</span>
                            </div>
                         </div>
                            <div className="flexCenter button">Video Call</div>                
                        </div>
                    </div>   
                    {/** Fourth mode */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexStart icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                <span className='primaryText'>Message</span>
                                <span className='secondaryText'>021 123 456 78</span>
                            </div>
                         </div>
                            <div className="flexCenter button">Message now</div>                
                        </div>

                    </div>
                </div>
            </div>
            <div className="con-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
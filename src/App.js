import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
        session_length:25,
        minute:"25",
        second:"00",
        break_length:5,
        timer_status:0,
        timer_name:"Session"
    };
  }

  decrementSession= () => {
    if (this.state.session_length===1){
      return ;
    }
    this.setState({
      session_length:this.state.session_length-1,
      second:'00'
    })
    setTimeout(() => {
      this.setState({
        minute:`${this.state.session_length}`
      })
    },100)
  }

  incrementSession = () => {
    if (this.state.session_length===60){
      return ;
    }
    this.setState({
      session_length:this.state.session_length+1,
      second:'00'
    })
    setTimeout(() => {
      this.setState({
        minute:`${this.state.session_length}`
      })
    },100)
  }

  decrementBreak = () => {
    if (this.state.break_length===1){
      return ;
    }
    this.setState({
      break_length:this.state.break_length-1
    })
  }

  incrementBreak = () => {
    if (this.state.break_length===60){
      return ;
    }
    this.setState({
      break_length:this.state.break_length+1
    })
  }

  reset = () => {
    this.setState({
      session_length:25,
      minute:"25",
      second:"00",
      break_length:5
    })
    document.getElementById('beep').pause();
  }

  set_interval_id = 4;

  clockcount = () => {
    if (this.state.second==="00"){
      let k = parseInt(this.state.minute)-1;
      let t = k;
      k = k.toString();
      if (k.length===1){
        k = '0'+k;
      }
      if (t===-1){
        if (this.state.timer_name==="Session"){
            let k = this.state.break_length;
            k = k.toString();
            if (k.length===1){
              k = "0"+k;
            }
            this.setState({
              minute:k,
              second:"00",
              timer_name:"Break"
            })
        }
        else{
            let k = this.state.session_length;
            k = k.toString();
            if (k.length===1){
              k = "0"+k;
            }
            if(this.state.minute==="00" && k==="00"){
              document.getElementById('beep').play();
            }
            this.setState({
              minute:k,
              second:"00",
              timer_name:"Session"
            })
        }
        
      }
      else{
        this.setState(
          {
            minute:k,
            second:"59"
          }
        )
      }
    }
    else{
      let k = parseInt(this.state.second)-1;
      k = k.toString();
      if (k.length===1){
        k = '0'+k;
      }
      this.setState({
        second:k,
      })
    }
  }

  start_stop_timer = () =>{
    if (this.state.timer_status===0){
      this.setState({
        timer_status:1
      })
      this.set_interval_id = setInterval(()=>{
        this.clockcount();
      },1000)
    }
    else{
      clearInterval(this.set_interval_id);
      this.setState({
        timer_status:0
      })
    }
  }

  render(){
    return(
      <div id='app'>
        <div class="landing_page">
      {/* <!--icon is here--> */}
      <div class="navbar_and_icon">
        <div class="icon">
          <img src="/logo_place_here.png" alt="" class="image_logo" />
        </div>

        {/* <!--navbar is here--> */}
        <nav class="navbar">
          <ul class="linklist">
            <li>
              <a href="/">HOME</a>
              <div class="underline"></div>
            </li>
            <li>
              <a href="/">ABOUT US</a>
              <div class="underline"></div>
            </li>
            <li>
              <a href="/">SETTINGS</a>
              <div class="underline"></div>
            </li>
            <li>
              <a href="/">PORTFOLIO</a>
              <div class="underline"></div>
            </li>
            <li>
              <a href="/">OUR TEAM</a>
              <div class="underline"></div>
            </li>
            <li>
              <a href="/">NEWS</a>
              <div class="underline"></div>
            </li>
            <li>
              <a href="/">CONTACT</a>
              <div class="underline"></div>
            </li>
          </ul>
        </nav>
        <div class="hamburger">
          <img src="./hamburger.png" alt="" id="hamburger_img" />
        </div>
      </div>
      <div class="landing_page_content">
        <img
          src="/welcome_to_the_award_winn.png"
          alt=""
          class="welcome_to_the_award_winn"
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In mollitia
          quod iste expedita nobis dolorum libero corporis unde blanditiis
          possimus nemo ullam, quos consequuntur
        </p>
        <div class="landing_page_buttons">
          <button id="read_more1">READ MORE</button>
          <button id="read_more2">READ MORE</button>
        </div>
      </div>
      <div id="small_navbar">
        <ul class="linklist_small">
          <li>
            <a href="/">HOME</a>
            <div class="underline"></div>
          </li>
          <li>
            <a href="/">ABOUT US</a>
            <div class="underline"></div>
          </li>
          <li>
            <a href="/">SETTINGS</a>
            <div class="underline"></div>
          </li>
          <li>
            <a href="/">PORTFOLIO</a>
            <div class="underline"></div>
          </li>
          <li>
            <a href="/">OUR TEAM</a>
            <div class="underline"></div>
          </li>
          <li>
            <a href="/">NEWS</a>
            <div class="underline"></div>
          </li>
          <li>
            <a href="/">CONTACT</a>
            <div class="underline"></div>
          </li>
        </ul>
      </div>
    </div>

    {/* <!--about creative agency page--> */}
    <div class="about_page_outer">
      <h2 class="about_heading">About Creative Agency</h2>
    <div class="about_page">
      <div class="first_about">
        <div class="first_about_inner">
          <img
            src="/about_creative_agecny.png"
            alt=""
            class="about_img"
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            enim cumque voluptatibus animi magni laborum veritatis eum a, quod
            rem at! Fuga voluptatum libero at aliquid numquam. Id nam alias
            saepe pariatur sit! Mollitia quasi totam numquam excepturi uod rem
            at! Fuga voluptatum libero at aliquid numquam. Id nam alias saepe
            pariatur sit! Mollitia quasi totam numquam excepturiuod rem at! Fuga
            voluptatum libero at aliquid numquam.!
          </p>
        </div>
      </div>
      <div class="second_about">
        <div class="second_image">
          <div class="second_image_inside">
            <div>
              <img src="/working_hours.png" alt="" />
              <img src="./designer_name_2.png" alt="" />
              <img src="./icon_14.png" alt="" class="icon_tag" />
            </div>
          </div>
          <div class="second_image_inside">
            <div>
              <img src="./working_hours.png" alt="" />
              <img src="./designer_name_2.png" alt="" />
              <img src="./icon_14.png" alt="" class="icon_tag" />
            </div>
          </div>
          <div class="second_image_inside">
            <div>
              <img src="./working_hours.png" alt="" />
              <img src="./designer_name_2.png" alt="" />
              <img src="./icon_14.png" alt="" class="icon_tag" />
            </div>
          </div>
          <div class="second_image_inside">
            <div>
              <img src="./working_hours.png" alt="" />
              <img src="./designer_name_2.png" alt="" />
              <img src="./icon_14.png" alt="" class="icon_tag" />
            </div>
          </div>
        </div>
        <div class="second_content">
          <div class="second_content_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            voluptatibus tempora quam nostrum praesentium sed eos recusandae
            cumque ipsa qui! Fugit, sunt! Laudantium dolorem
          </div>
          <div class="second_content_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            voluptatibus tempora quam nostrum praesentium sed eos recusandae
            cumque ipsa qui! Fugit, sunt! Laudantium dolorem
          </div>
          <div class="second_content_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            voluptatibus tempora quam nostrum praesentium sed eos recusandae
            cumque ipsa qui! Fugit, sunt! Laudantium dolorem
          </div>
          <div class="second_content_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            voluptatibus tempora quam nostrum praesentium sed eos recusandae
            cumque ipsa qui! Fugit, sunt! Laudantium dolorem
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* <!--Our special services--> */}
    <div class="services_outer">
      <h2 class="small_heading_services">Our Special Services</h2>
      <div class="services">
        <div class="service_heading">
          <img src="./our_special_services.png" alt="" />
        </div>
        <div class="service_content">
          <div class="service_content_box">
            <div class="service_content_img">
              <img src="./icon_13.png" alt="" />
            </div>
            <div>
              <p class="service_content_heading">ACHIEVES</p>
              <p class="normal_heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                nihil nobis, explicabo omnis atque ipsam?
              </p>
            </div>
          </div>
          <div class="service_content_box">
            <div class="service_content_img">
              <img src="./icon_12.png" alt="" />
            </div>
            <div>
              <p class="service_content_heading">DESIGNER</p>
              <p class="normal_heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                nihil nobis, explicabo omnis atque ipsam?
              </p>
            </div>
          </div>
          <div class="service_content_box">
            <div class="service_content_img">
              <img src="./icon_11.png" alt="" />
            </div>
            <div>
              <p class="service_content_heading">PERFECT DESIGN</p>
              <p class="normal_heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                nihil nobis, explicabo omnis atque ipsam?
              </p>
            </div>
          </div>
          <div class="service_content_box">
            <div class="service_content_img">
              <img src="./icon_10.png" alt="" />
            </div>
            <div>
              <p class="service_content_heading">PERFECT DESIGN</p>
              <p class="normal_heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                nihil nobis, explicabo omnis atque ipsam?
              </p>
            </div>
          </div>
          <div class="service_content_box">
            <div class="service_content_img">
              <img src="./icon_9.png" alt="" />
            </div>
            <div>
              <p class="service_content_heading">ACHIEVES</p>
              <p class="normal_heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                nihil nobis, explicabo omnis atque ipsam?
              </p>
            </div>
          </div>
          <div class="service_content_box">
            <div class="service_content_img">
              <img src="./icon_8.png" alt="" />
            </div>
            <div>
              <p class="service_content_heading">ACHIEVES</p>
              <p class="normal_heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                nihil nobis, explicabo omnis atque ipsam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- latest blog designs --> */}
    <div class="services_outer member_outer blog_outer">
      <h2 class="small_heading_services small_heading_blog">Latest Blog Design</h2>
      <div class="services">
        <div class="service_heading design_heading member_heading blog_heading">
          <img src="./latest_design_blog.png" alt="" />
        </div>
        <div class="blog_design">
          <div class="blog_design_content">
            <div class="blog_design_image_main">
              <div class="blog_design_image blog_design_image1"></div>
              <div class="blog_design_image blog_design_image2"></div>
              <div class="blog_design_image blog_design_image3"></div>
            </div>
            <div class="blog_design_para_main">
              <div class="blog_design_image">
                <p class="blog_design_para_heading">DESIGNED AND BUILD WITH CARE</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, modi saepe! Est eaque facilis quo labore laboriosam rem quas hic! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaqu</p>
              </div>
              <div class="blog_design_image">
                <p class="blog_design_para_heading">DESIGNED AND BUILD WITH CARE</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, modi saepe! Est eaque facilis quo labore laboriosam rem quas hic! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaqu</p>
              </div>
              <div class="blog_design_image">
                <p class="blog_design_para_heading">DESIGNED AND BUILD WITH CARE</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, modi saepe! Est eaque facilis quo labore laboriosam rem quas hic! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaqu</p>
              </div>
            </div>
          </div>
          <div class="blog_design_single_image">
            <div class="blog_design_image">
              <p class="blog_design_para_heading">DESIGNED AND BUILD WITH CARE</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, modi saepe! Est eaque facilis quo labore laboriosam rem quas hic! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaqu</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!--Members page--> */}
    <div class="services_outer member_outer">
      <h2 class="small_heading_services">Creative Team Memebers</h2>
      <div class="services">
        <div class="service_heading design_heading member_heading">
          <img src="./creative_team_members.png" alt="" />
        </div>
        <div class="service_content">
          <div class="service_content_box">
            <div class="designs_content_img members_content_img1">
              {/* <!-- <img src="./rectangle_1_copy_14_3.jpg" alt="" /> --> */}
            </div>
            <div>
              <div class="service_content_heading">
                <p class="design_heading1">DESIGNER NAME</p>
                <p>GRAPHIC DESIGNER</p>
              </div>
              <p class="normal_heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                nihil nobis, explicabo omnis atque ipsam? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nostrum nihil nobis,
                explicabo omnis atque ipsam? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nostrum nihil nobis, explicabo
                omnis atque ipsam?
              </p>
            </div>
          </div>
          <div class="service_content_box">
            <div class="designs_content_img members_content_img2">
              {/* <!-- <img src="./rectangle_1_copy_14.jpg" alt="" /> --> */}
            </div>
            <div>
              <div class="service_content_heading">
                <p class="design_heading1">DESIGNER NAME</p>
                <p>GRAPHIC DESIGNER</p>
              </div>
              <p class="normal_heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                nihil nobis, explicabo omnis atque ipsam? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nostrum nihil nobis,
                explicabo omnis atque ipsam? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nostrum nihil nobis, explicabo
                omnis atque ipsam?
              </p>
            </div>
          </div>
          <div class="service_content_box">
            <div class="designs_content_img members_content_img3">
              {/* <!-- <img src="./rectangle_1_copy_14_2.jpg" alt="" /> --> */}
            </div>
            <div>
              <div class="service_content_heading">
                <p class="design_heading1">DESIGNER NAME</p>
                <p>GRAPHIC DESIGNER</p>
              </div>
              <p class="normal_heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                nihil nobis, explicabo omnis atque ipsam? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nostrum nihil nobis,
                explicabo omnis atque ipsam? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nostrum nihil nobis, explicabo
                omnis atque ipsam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*<!-- gallery -->*/}
    <div class="gallery">
      <h2 class="gallery_heading">Our portfolio Gallery</h2>
      <div class="upper">
        <div class="upper1 upper_upper"></div>
        <div class="upper2 upper_upper"></div>
      </div>
      <div class="lower">
        <div class="lower1 lower_lower">
          <div class="lower11 lower1_lower1"></div>
          <div class="lower12 lower1_lower1">
            <img src="./our_portfolio_gallery.png" alt="" />
          </div>
        </div>
        <div class="lower2 lower_lower">
          <div class="lower21 lower2_lower2"></div>
          <div class="lower22 lower2_lower2"></div>
        </div>
      </div>
    </div>

    {/*<!--design package-->*/}
    <div class="services_outer design_outer">
      <h2 class="small_heading_services">Our Design Packages</h2>
      <div class="services">
        <div class="service_heading design_heading">
          <img src="./our_desigins_package.png" alt="" />
        </div>
        <div class="service_content">
          <div class="service_content_box design_content_box">
            <div class="designs_content_img">
              <img src="./icon_7.png" alt="" />
            </div>
            <div>
              <div class="service_content_heading">
                <p class="design_heading1">DESIGNER NAME</p>
                <p>GRAPHIC DESIGNER</p>
              </div>
              <p class="normal_heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                nihil nobis, explicabo omnis atque ipsam? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nostrum nihil nobis,
                explicabo omnis atque ipsam? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nostrum nihil nobis, explicabo
                omnis atque ipsam?
              </p>
              <div class="price">
                <img src="./50.png" alt="" />
              </div>
              <button class="read_more">READ MORE</button>
            </div>
          </div>
          <div class="service_content_box design_content_box">
            <div class="designs_content_img">
              <img src="./icon_6.png" alt="" />
            </div>
            <div>
              <div class="service_content_heading">
                <p class="design_heading1">DESIGNER NAME</p>
                <p>GRAPHIC DESIGNER</p>
              </div>
              <p class="normal_heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                nihil nobis, explicabo omnis atque ipsam? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nostrum nihil nobis,
                explicabo omnis atque ipsam? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nostrum nihil nobis, explicabo
                omnis atque ipsam?
              </p>
              <div class="price">
                <img src="./500.png" alt="" />
              </div>
              <button class="read_more">READ MORE</button>
            </div>
          </div>
          <div class="service_content_box design_content_box">
            <div class="designs_content_img">
              <img src="./icon_5.png" alt="" />
            </div>
            <div>
              <div class="service_content_heading">
                <p class="design_heading1">DESIGNER NAME</p>
                <p>GRAPHIC DESIGNER</p>
              </div>
              <p class="normal_heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                nihil nobis, explicabo omnis atque ipsam? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nostrum nihil nobis,
                explicabo omnis atque ipsam? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nostrum nihil nobis, explicabo
                omnis atque ipsam?
              </p>
              <div class="price">
                <img src="./1000.png" alt="" />
              </div>
              <button class="read_more">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*<!--contact page-->*/}
    <div class="contact">
      <div class="contact_content">
        <div class="contact_content_inner">
          <img
            src="./how_find_us.png"
            alt=""
            class="contact_main_image"
          />
          <div class="address">
            <img src="./icon_4.png" alt="" />
            <div>
              <p class="address_heading">ADDRESS</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, omnis?
              </p>
            </div>
          </div>
          <div class="address">
            <img src="./icon_3.png" alt="" />
            <div>
              <p class="address_heading">CALL US</p>
              <p>+91 9876543210</p>
              <p>+91 1032547698</p>
            </div>
          </div>
          <div class="address">
            <img src="./icon_2.png" alt="" />
            <div>
              <p class="address_heading">EMAIL</p>
              <p>anupamjhabbl@gmail.com</p>
            </div>
          </div>
          <div class="address">
            <img src="./icon.png" alt="" />
            <div>
              <p class="address_heading">WEBSITE</p>
              <p>www.jhabbl.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="contact_image"></div>
    </div>

    { /*Footer */}
    <div class="footer">
      <p> Copyright &#169; 2017. Design by PSDFreebies.com </p>
    </div>

      </div>
    )
  }
}


export default App;

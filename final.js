// Components built in babel

const Main = () => {
  return (
    <main className="Main">
      <SVG />
      <Form />
    </main>
  )
}

const Form = () => {
  return (
    <form>
      <PasswordField />
    </form>
  )
}

const PasswordField = () => {
  return (
    <div className="field">
      <label for="password">Password</label>
      <input type="password" name="password" id="password"
        onFocus={handler}
        onBlur={handler}
        onKeyUp={handler}
        onKeyDown={handler}
      />
      <i className="fas fa-key" data-action="show"
        onClick={handler}></i>
    </div>
  )
}

const SVG = () => {
  return (
    <svg className="SVG" viewBox="0 0 284.8 400.1">
      <g className="sword-right sword">
        <g className="seq-3 seq">
          <path
            className="st0"
            d="M220.3,147.3L98,295.8c-1.4,1.7-3.2,3-5.1,3.6l-27.8,9.9c-3.7,1.3-6.9-1.4-6.3-5.2l4.7-28.6
          c0.3-2,1.2-3.9,2.6-5.6l122.5-148.7L220.3,147.3"
          />
          <polygon
            className="st1"
            points="180.7,133.8 209.5,157.5 217.7,147.6 188.9,123.9 		"
          />
          <path
            className="st2"
            d="M182.9,142.6l9.3,7.2c0.9,0.7,1.1,2,0.3,2.9L72,296.1c-1.3,1.6-3.9,0.4-3.6-1.7l3.4-19.3
          c0.1-0.3,0.2-0.7,0.4-0.9L180,143C180.7,142.1,182,142,182.9,142.6z"
          />
        </g>
        <g className="seq-2 seq">
          <path
            className="st3"
            d="M191.2,95.4l22.3,9.5l18,14.8l13,19.5c1.7,2.5,1.5,5.8-0.4,8.2l-5.1,6.2c-2.2,2.7-6.2,3.1-8.9,0.9l-51-42
          c-2.3-1.9-2.6-5.3-0.7-7.6l6.5-7.8C186.3,95,189,94.4,191.2,95.4z"
          />
          <path
            className="st4"
            d="M184,106.2l3.8-4.5c0.6-0.7,1.5-0.9,2.4-0.6l15.8,5.8c0.2,0.1,0.4,0.2,0.6,0.4l6.5,5.5
          c0.4,0.3,0.4,0.9,0.1,1.3l-9.6,9.8c-0.3,0.3-0.8,0.4-1.2,0.1l-18.1-14.7C183.4,108.5,183.3,107.1,184,106.2z"
          />
        </g>
        <path
          className="seq-1 seq st3"
          d="M245.4,84.3L245.4,84.3c4.9,4.1,5.6,11.4,1.6,16.3l-15.8,19.2l-17.9-14.7L229,85.9
        C233.1,80.9,240.4,80.2,245.4,84.3z"
        />
      </g>
      <g className="sword-left sword">
        <g className="seq-2 seq">
          <path
            className="st3"
            d="M71.2,93.9L49,103.4l-18,14.8l-13,19.5c-1.7,2.5-1.5,5.8,0.4,8.2l5.1,6.2c2.2,2.7,6.2,3.1,8.9,0.9l51-42
          c2.3-1.9,2.6-5.3,0.7-7.6l-6.5-7.8C76.1,93.6,73.5,92.9,71.2,93.9z"
          />
          <path
            className="st4"
            d="M78.4,104.7l-3.8-4.5c-0.6-0.7-1.5-0.9-2.4-0.6l-15.8,5.8c-0.2,0.1-0.5,0.2-0.6,0.4l-6.5,5.5
          c-0.4,0.3-0.4,0.9-0.1,1.3l9.6,9.8c0.3,0.3,0.8,0.4,1.2,0.1l18.1-14.7C79,107,79.2,105.7,78.4,104.7z"
          />
        </g>
        <path
          className="seq-1 seq st3"
          d="M17.1,82.8L17.1,82.8c-4.9,4.1-5.6,11.4-1.6,16.3l15.8,19.2l17.9-14.7L33.4,84.4
        C29.4,79.5,22,78.7,17.1,82.8z"
        />
        <g className="seq-3 seq">
          <path
            className="st0"
            d="M42.1,145.8l122.3,148.5c1.4,1.7,3.2,3,5.1,3.6l27.8,9.9c3.7,1.3,6.9-1.4,6.3-5.2l-4.7-28.6
          c-0.3-2-1.2-3.9-2.6-5.6L73.8,119.7L42.1,145.8"
          />
          <polygon
            className="st1"
            points="81.8,132.3 52.9,156 44.7,146.1 73.6,122.4 		"
          />
          <path
            className="st2"
            d="M79.6,141.2l-9.3,7.2c-0.9,0.7-1.1,2-0.3,2.9l120.5,143.3c1.3,1.6,3.9,0.4,3.6-1.7l-3.4-19.3
          c-0.1-0.3-0.2-0.7-0.4-0.9L82.4,141.5C81.7,140.6,80.5,140.5,79.6,141.2z"
          />
        </g>
      </g>
      <g className="wind-right wind">
        <path
          className="seq st5"
          d="M215.8,312.6l16.7,16.7c0.1,0.1,0.3,0.3,0.4,0.4c1.6,1.3,10.6,7.8,17.5-0.3c0,0,5-5.5,0.4-12.1
        c-0.3-0.4-0.6-0.8-1-1.1c-1.4-1.1-4.8-3.3-9-1.1c-0.3,0.2-0.7,0.4-1,0.6c-1.1,1-3.6,3.6-1.9,7.4c0.7,1.6,2.1,2.8,3.9,3.1
        c0.8,0.1,1.7,0.1,2.7-0.2c3.3-1.1,1.6-4,1.6-4"
        />
        <path
          className="seq st5"
          d="M203.7,319.8l33.4,33.4c0,0,6.7,6.6,1.1,13.6c-0.6,0.7-1.3,1.3-2.1,1.8
        c-1.2,0.7-3.2,1.4-5.6,0.9c-2.5-0.5-4.6-2.3-5.3-4.8c-0.5-1.5-0.5-3.4,1-5.3c0,0,2.2-2.8,4.9-2.2"
        />
        <path
          className="seq st5"
          d="M213.8,319.8l47.6,47.6c0,0,3.6,3.3,2,7.3s-6.2,5.7-8.7,3.2c-2.2-2.2-2.5-5.1-0.1-7s6.2,0.5,5,3
        "
        />
      </g>
      <g className="wind-left wind">
        <path
          className="seq st5"
          d="M49,311.4L32.3,328c-0.1,0.1-0.3,0.3-0.4,0.4c-1.6,1.3-10.6,7.8-17.5-0.3c0,0-5-5.5-0.4-12.1
        c0.3-0.4,0.6-0.8,1-1.1c1.4-1.1,4.8-3.3,9-1.1c0.3,0.2,0.7,0.4,1,0.6c1.1,1,3.6,3.6,1.9,7.4c-0.7,1.6-2.1,2.8-3.9,3.1
        c-0.8,0.1-1.7,0.1-2.7-0.2c-3.3-1.1-1.6-4-1.6-4"
        />
        <path
          className="seq st5"
          d="M61.1,318.6L27.8,352c0,0-6.7,6.6-1.1,13.6c0.6,0.7,1.3,1.3,2.1,1.8c1.2,0.7,3.2,1.4,5.6,0.9
        c2.5-0.5,4.6-2.3,5.3-4.8c0.5-1.5,0.5-3.4-1-5.3c0,0-2.2-2.8-4.9-2.2"
        />
        <path
          className="seq st5"
          d="M51,318.6L3.4,366.2c0,0-3.6,3.3-2,7.3s6.2,5.7,8.7,3.2c2.2-2.2,2.5-5.1,0.1-7s-6.2,0.5-5,3"
        />
      </g>
        <g className="shield">
          <path
            className="st0"
            d="M124.4,132.2c0,0,6.1-1.6,10.4,0s72.6,30.1,72.6,30.1s9.4,4.7,9.4,15.2
          c0,10.5-1.3,100.4-79.3,137.7c0,0-7.2,4-15.3,0c-8.1-4-79.1-41.8-79.5-137.1c0,0,0-11.4,10.4-15.9
          C63.5,157.7,124.4,132.2,124.4,132.2z"
          />
          <path
            className="st2"
            d="M128.5,140.6V159v39.4v34.8v58.7v15.5c0,0.1,0,1.6,0,1.6c0,0.8,0,0.8,0,0.8c-0.1,0-2.3-1-2.4-1
          c-13-7.5-73.7-47-75-127.1c-0.1-5.3,3-10.1,7.8-12.3l67.8-30C127.5,139,128.5,139.7,128.5,140.6z"
          />
          <path
            className="st1"
            d="M128.5,315c1.3,0,2.8,0,4.3-0.3c8.6-1.9,19.9-9.4,33.1-20.4c5.5-4.5,10.8-10.3,17.3-18.2
          c26.9-32.6,31-77.9,31.7-94.4c0,0-1,75.8-85.6,127.7c-0.1,0.1-0.7,0.1-0.7,0.3V315z"
          />
        </g>
      <g className="crown">
        <g className="seq-2 seq">
          <path
            className="st0"
            d="M160.6,64l12.5-33.3c0.5-1.3-1-2.6-2.2-1.8l-16.1,9.6c-2.5,1.5-5.8,0.6-7.2-1.9L132.1,9c-0.6-1-2.1-1-2.6,0
          l-15.6,27.6c-1.5,2.6-4.8,3.4-7.3,1.9L91,28.7c-1.2-0.8-2.7,0.4-2.2,1.8l12.1,33.4c0.4,1,1.3,1.7,2.4,1.7h55
          C159.3,65.6,160.2,64.9,160.6,64z"
          />
          <path
            className="st1"
            d="M91.1,31.1l3.8,10.4c0,0,3.9-0.8,5.6-4.5L91.1,31.1z"
          />
          <path
            className="st1"
            d="M160.9,37.1c0,0,2.2,3.7,5.9,4.6l4-10.5L160.9,37.1z"
          />
          <path
            className="st1"
            d="M145.8,37.6l-10.6-15.7c0,0-4.1,2.2-8.8,0l-10.7,15.7l15-26.8L145.8,37.6z"
          />
        </g>
        <g className="seq-1 seq">
          <path
            className="st3"
            d="M159.7,73.5h-58.2c-2.7,0-4.9,2.2-4.9,4.9v0c0,2.7,2.2,4.9,4.9,4.9h58.2c2.7,0,4.9-2.2,4.9-4.9v0
          C164.6,75.7,162.4,73.5,159.7,73.5z"
          />
          <path
            className="st4"
            d="M98.7,78.4h64c0,0,0.3,2.5-2.7,3h-58.4C101.6,81.4,98.5,81.4,98.7,78.4z"
          />
        </g>
        <g className="seq-3 seq">
          <circle className="st3 dot" cx="89.2" cy="29" r="7.5" />
          <circle className="st3 dot" cx="130.7" cy="9.5" r="7.5" />
          <circle className="st3 dot" cx="172.1" cy="29" r="7.5" />
        </g>
      </g>
    </svg>
  )
}

// Render

ReactDOM.render(<Main />, document.getElementById("app"))

// Globals

const animations = {
  levelOne: {
    animating: false,
    recoil: false
  },
  
  levelTwo: {
    animating: false,
    recoil: false
  },
  
  levelThree: {
    animating: false,
    recoil: false
  }
}

// Functions

function handler(e) {
  const data = {
    event: e.type,
    key: e.key,
    target: e.currentTarget,
    input: e.currentTarget.parentElement.querySelector("input"),
    value: e.currentTarget.value,
    icon: e.currentTarget.parentElement.querySelector("i"),
    action: e.currentTarget.parentElement.querySelector("i").getAttribute("data-action"),
    label: e.currentTarget.parentElement.querySelector("label")
  }
  
  this.filter(data)
}

function filter(data) {
  if (data.event == "focus") {
    this.paintIcon(data, "#ff79e6")
  }
  
  else if (data.event == "blur" && data.value.length == 0) {
    this.paintIcon(data, "#bdbdbd")
  }
  
  else if (data.event == "keydown" && data.key.length == 1 && data.value.length == 0) {
    if (data.action == "hide") {
      this.toggleIcon(data, 360, "fas fa-eye", "all")
    }
    else if (data.action == "show") {
      this.toggleIcon(data, 360, "fas fa-eye-slash", "all")
    }
    
    this.animateLabel(data, 0.8, -6, 15)
  }
  
  else if (data.event == "keyup" && data.value.length == 0) {
    this.toggleIcon(data, 0, "fas fa-key", "none")
    this.animateLabel(data, 1, 0, 0)
  }
  
  else if (data.event == "keyup" && data.value.length > 0) {
    this.checkStrength(data)
  }
  
  else if (data.event == "click") {
    if (data.action == "show") {
      this.togglePassVisibility(data, "hide", "text", "14px", "fas fa-eye")
    } 
    else if (data.action == "hide") {
      this.togglePassVisibility(data, "show", "password", "16px", "fas fa-eye-slash")
    } 
  }
}

function paintIcon({icon}, color) {
  gsap.to(icon, {
    duration: 0.3,
    ease: "power3.inOut",
    color: color
  })
}

function toggleIcon({icon}, rotate, fontAwesome, pointerEvents) {
  gsap.to(icon, {
    duration: 0.6,
    ease: "power3.inOut",
    rotate: rotate,
    transformOrigin: "70% 50%"
  })
  
  setTimeout(() => {
    icon.setAttribute("class", fontAwesome)
    icon.style.pointerEvents = pointerEvents
  }, 300)
}

function animateLabel({input, label}, scale, y, paddingTop) {
  gsap.to(label, {
    duration: 0.3,
    ease: "power3.inOut",
    transformOrigin: "0 12px",
    scale: scale,
    y: y
  })
  
  gsap.set(input, {
    paddingTop: paddingTop
  })
}

function togglePassVisibility({input, icon}, action, type, fontSize, fontAwesome) {
  icon.setAttribute("data-action", action)
  icon.setAttribute("class", fontAwesome)
  input.setAttribute("type", type)
  input.style.fontSize = fontSize
}

function checkStrength({value}) {
  if (value.match(/(?=.*[a-z])(?=.*[A-Z]).{8,}$/g)) {
    if (!animations.levelOne.recoil) this.animateLevelOne()
    
    animations.levelOne.recoil = true
    animations.levelOne.animating = true

    setTimeout(() => {
      animations.levelOne.animating = false
    }, 1800)
    
  } else {
    if (animations.levelOne.recoil) this.hideLevelOne()
    
    animations.levelOne.recoil = false
    animations.levelOne.animating = true
    
    setTimeout(() => {
      animations.levelOne.animating = false
    }, 1800)
  }
  
  if (value.length >= 8 && value.match(/[0-9]/g) != null) {  
    if (!animations.levelTwo.recoil) this.animateLevelTwo()
    
      animations.levelTwo.recoil = true
      animations.levelTwo.animating = true
    
      setTimeout(() => {
        animations.levelTwo.animating = false
      }, 1800)
    
  } else if (!value.match(/[0-9]/g)) { 
    if (animations.levelTwo.recoil) this.hideLevelTwo()
    
      animations.levelTwo.recoil = false
      animations.levelTwo.animating = true
    
      setTimeout(() => {
        animations.levelTwo.animating = false
      }, 1800)
  }
  
  if (value.length >= 8 && value.match(/[^\p{L}\d\s@#]/u)) {
    if (!animations.levelThree.recoil) this.animateLevelThree()
    
      animations.levelThree.recoil = true
      animations.levelThree.animating = true
    
      setTimeout(() => {
        animations.levelThree.animating = false
      }, 1800)
    
  } else if (!value.match(/[^\p{L}\d\s@#]/u)) {
    if (animations.levelThree.recoil) this.hideLevelThree()
    
    animations.levelThree.recoil = false
    animations.levelThree.animating = true
    
    setTimeout(() => {
      animations.levelThree.animating = false
    }, 1800)
  }
}

function animateLevelOne() {
  this.animateSword(".sword-right", ".sword-right .seq-1", ".sword-right .seq-2", ".sword-right .seq-3")
  this.animateShieldBounce()
  this.animateWind(".wind-left .seq")
}

function hideLevelOne() {
  this.hideSword(".sword-right", ".sword-right .seq-1", ".sword-right .seq-2", ".sword-right .seq-3")
  this.hideWinds()
}

function animateLevelTwo() {
  this.animateSword(".sword-left", ".sword-left .seq-1", ".sword-left .seq-2", ".sword-left .seq-3")
  this.animateShieldBounce()
  this.animateWind(".wind-right .seq")
}

function hideLevelTwo() {
  this.hideSword(".sword-left", ".sword-left .seq-1", ".sword-left .seq-2", ".sword-left .seq-3")
  this.hideWinds()
}

function animateLevelThree() {
  this.animateCrown()
}

function hideLevelThree() {
  this.hideCrown()
}

function animateSword(sword, swordSeqOne, swordSeqTwo, swordSeqThree, reverse) {
  const tl = gsap.timeline()
  const tl2 = gsap.timeline()
  
  tl.to(swordSeqOne, {
    duration: .3,
    delay: .3,
    ease: "power3.out", 
    scale: 1,
    transformOrigin: "50% 50%"
  })

  tl.to(swordSeqTwo, {
    duration: .3,
    ease: "power3.out", 
    scale: 1,
    transformOrigin: "50% 50%"
  })

  tl.to(swordSeqThree, {
    duration: .3,
    ease: "back.out", 
    scale: 1,
    transformOrigin: "50% 50%"
  })
  
   tl.to(swordSeqOne + ", " + swordSeqTwo + ", " + swordSeqThree, {
    duration: .3,
    delay: -.3,
    ease: "power3.inOut", 
    x: 0,
    y: 0
  })

  tl2.to(sword, {
    duration: 1.8,
    ease: "power3.inOut",
    y: -48,
    rotate: -18,
    x: -12
  })

  tl2.to(sword, {
    duration: .3,
    delay: -.3,
    ease: "back(3).inOut",
    y: 0,
    rotate: 0,
    x: 0
  })
}

function hideSword(sword, swordSeqOne, swordSeqTwo, swordSeqThree) {
  const tl = gsap.timeline()
  const tl2 = gsap.timeline()
  
  tl.to(swordSeqOne, {
    duration: .3,
    delay: .3,
    ease: "power3.out", 
    scale: 0,
    transformOrigin: "50% 50%"
  })

  tl.to(swordSeqTwo, {
    duration: .3,
    ease: "power3.out", 
    scale: 0,
    transformOrigin: "50% 50%"
  })

  tl.to(swordSeqThree, {
    duration: .3,
    ease: "back.out", 
    scale: 0,
    transformOrigin: "50% 50%"
  })

  tl.to(swordSeqOne + ", " + swordSeqTwo + ", " + swordSeqThree, {
    duration: .3,
    delay: -.3,
    ease: "power3.inOut", 
    x: 0,
    y: 0
  })

  tl2.to(sword, {
    duration: 1.8,
    ease: "power3.inOut",
    y: -48,
    rotate: -18,
    x: -12
  })
  
  tl2.to(sword, {
    duration: .3,
    delay: -.3,
    ease: "back(3).inOut",
    y: 0,
    rotate: 0,
    x: 0
  })
}

function animateShieldBounce() {
  const tl = gsap.timeline({delay: 1.6})
  
  tl.to(".shield", {
    duration: .3,
    ease: "back.out",
    y: 24,
  })
  
  tl.to(".shield", {
    duration: .6,
    delay: -.2,
    ease: "back(2).inOut",
    y: 0,
  })
}

function animateWind(wind) {
  const tl = gsap.timeline({delay: 1.6})
  
  tl.to(wind, {
    duration: .9, 
    stagger: 0.1,
    ease: "expo.out", 
    drawSVG:"0 100%", 
  })
  
  tl.to(wind, {
    duration: .9, 
    delay: -.8,
    stagger: 0.1,
    ease: "expo.out", 
    drawSVG:"100% 100%",
  })
}

function hideWinds() {
  gsap.set(".wind .seq", {drawSVG:"0%"})
}

function animateCrown() {
  const tl = gsap.timeline()
  
  tl.to(".crown .seq-1", {
    duration: .9,
    ease: "back.out",
    scale: 1,
    y: 0,
    rotate: 360
  })
  
  tl.to(".crown .seq-2", {
    duration: .9,
    delay: -.7,
    ease: "back.inOut",
    scale: 1,
    y: 0,
    rotate: 0
  })
  
  tl.to(".crown .seq-3 .dot", {
    duration: .3,
    delay: -.3,
    stagger: .3,
    ease: "back.out",
    scale: 1.3,
    y: 0,
    transformOrigin: "50% 50%",
  })
  
  tl.to(".crown .seq-3 .dot", {
    duration: .6,
    delay: -.6,
    stagger: .3,
    ease: "back.inOut",
    scale: 1,
    y: 0,
    transformOrigin: "50% 50%",
  })
}

function hideCrown() {
  const tl = gsap.timeline()
  
  tl.to(".crown .seq-3 .dot", {
    duration: .3,
    stagger: .3,
    ease: "back.out",
    scale: 0,
    transformOrigin: "50% 50%",
  })
  
  tl.to(".crown .seq-3 .dot", {
    duration: 0,
    y: -90,
    x: -6
  })
  
  tl.to(".crown .seq-2", {
    duration: .3,
    ease: "back.inOut",
    scale: 0,
    y: 0,
    rotate: 0
  })
  
  tl.to(".crown .seq-1", {
    duration: .6,
    ease: "back.out",
    scale: 0,
    y: -90,
    x: -6,
    rotate: 0
  })
}

// Initialize

function init() {
  this.hideWinds()
  
  gsap.set(".sword .seq, .crown .seq-1, .crown .seq-2, .crown .seq-3 .dot", {scale: 0, transformOrigin: "50% 50%"})
  
  gsap.set(".crown .seq-1", {y: -90, x: -6})
  gsap.set(".crown .seq-2", {y: 30, x: -6, rotate: 90, transformOrigin: "50% 50%"})
  gsap.set(".crown .seq-3 .dot", {y: -90, x: -6})
  
  if (window.innerWidth < 920) {
    gsap.set("#password", { pointerEvents: "none"})
    gsap.set(".Main", {y: 0})
    
    this.animateLevelOne()
    setTimeout(() => {
      this.animateLevelTwo()
    }, 300)
    
    setTimeout(() => {
      this.animateLevelThree()
    }, 600)
    
    setTimeout(() => {
      this.hideLevelOne()
      this.hideLevelTwo()
      this.hideLevelThree()
    }, 2400)
    
    setTimeout(() => {
      gsap.set("#password", {pointerEvents: "all"})
    }, 3200)
  }
}

init()

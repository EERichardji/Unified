class ThreeColorsLight {
  constructor(container) {
    this.container = container
    // 创建控件HTML结构
    this.#createStructure()
    // 获取内部元素引用
    this.redLight = this.container.querySelector('#red-light')
    this.yellowLight = this.container.querySelector('#yellow-light')
    this.greenLight = this.container.querySelector('#green-light')

    // 所有灯元素
    this.allLights = [this.redLight, this.yellowLight, this.greenLight]
    // 初始化状态
    this.greenOn(true)
  }
  // 创建控件的HTML结构
  #createStructure() {
    this.container.innerHTML = `
     <div class="container">
      <h2 class="title">工业三色柱灯控件</h2>
      <div class="light-assembly">
        <div class="top-mount"></div>
        <div class="light-pillar">
          <div class="light-chamber">
            <div class="light-shade">
              <div id="red-light" class="light-glow color-off"></div>
            </div>
          </div>
          <div class="light-chamber">
            <div class="light-shade">
              <div id="yellow-light" class="light-glow color-off"></div>
            </div>
          </div>
          <div class="light-chamber">
            <div class="light-shade">
              <div id="green-light" class="light-glow color-green animate-pulse"></div>
            </div>
          </div>
        </div>
        <div class="bottom-connector"></div>
        <div class="bottom-base"></div>
      </div>
    </div>
    `
  }
  // 重置所有灯状态
  #resetAllLights() {
    this.allLights.forEach(light => {
      light.className = 'light-glow color-off'
    })
  }

  // 关闭所有灯
  allLightsOff() {
    this.#resetAllLights()
  }
  // 绿色灯 - 正常状态
  greenOn(blink = false) {
    if (blink) {
      this.greenLight.className = 'light-glow color-green animate-blink'
    } else {
      this.greenLight.className = 'light-glow color-green animate-pulse'
    }
  }

  greenOff() {
    this.greenLight.className = 'light-glow color-off'
  }
  // 黄色灯 - 警告状态
  yellowOn(blink = false) {
    if (blink) {
      this.yellowLight.className = 'light-glow color-yellow animate-blink'
    } else {
      this.yellowLight.className = 'light-glow color-yellow animate-pulse'
    }
  }

  yellowOff() {
    this.yellowLight.className = 'light-glow color-off'
  }

  // 红色灯 - 故障状态
  redOn(blink = false) {
    if (blink) {
      this.redLight.className = 'light-glow color-red animate-blink'
    } else {
      this.redLight.className = 'light-glow color-red animate-pulse'
    }
  }

  redOff() {
    this.redLight.className = 'light-glow color-off'
  }
}

export default function sketch(p, canvasWidth, canvasHeight) {
  // Define variable to track time
  let time = 0.0

  p.setup = () => {
    // Create canvas and attach it to the specified parent container
    const canvas = p.createCanvas(canvasWidth, canvasHeight)
    canvas.parent('p5-component-container')
  }

  p.draw = () => {
    // Set background color and transparency
    const bgColor = 0
    const bgAlpha = 40
    p.background(bgColor, bgAlpha)

    // Set the motion
    let radius = canvasHeight / 2
    let centerX = canvasWidth / 2 + p.cos(time) * radius * 2.5 // Motion on the X axis
    let centerY = canvasHeight / 2 + (p.sin(time) * radius) / 2.5 // Motion on the  Y axis

    // Draw the ellipse
    p.stroke(0, 255, 255)
    p.ellipse(centerX, centerY, radius, radius)

    // Increase time variable
    time += 0.05
  }
}

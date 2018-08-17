const IMAGE_SRC = 'https://images.unsplash.com/photo-1522431745718-cd31223a468d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c9c8bfa0765940faa0366ee967ed664&auto=format&fit=crop&w=334&q=80'

class StyleTransfer {
  constructor() {
    console.log('style transfer init')
  }

  meanSquaredError(a, b) {
    return tf.reduceMean(tf.square(a - b))
  }
}

new StyleTransfer()

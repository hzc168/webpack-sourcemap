export default () => {
    console.log('heading')

    const element = document.createElement('h2')
    element.textContent = 'hello webpack-sourcemap'
    return element
}

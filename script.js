const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    // console.log('drag start');
    // += will append the class, after the timeout the class will switch to invisible rendering the box white
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}
function dragEnd() {
    // console.log('drag end');
    // adds the class of fill when drag element action ends
    this.className = 'fill'
}
function dragOver(e) {
    // stops the default action of Default action Resetting the current drag operation to "none".
    e.preventDefault()
}
function dragEnter(e) {
    // stops the default action of Default action Resetting the current drag operation to "none".
    e.preventDefault()
    this.className += ' hovered'
}
function dragLeave() {
    // console.log('drag leave');
    // removes the hovered class when no longer hovering over the box
    this.className = ' empty'
}
function dragDrop() {
    // moves img to the new block
    this.className = 'empty'
    this.append(fill)
}
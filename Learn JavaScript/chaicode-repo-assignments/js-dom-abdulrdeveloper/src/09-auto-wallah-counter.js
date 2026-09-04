/**
 * 🛺 Auto Wallah Counter - DOM Traversal: parentNode, closest, siblings
 *
 * Auto-rickshaw stand ka queue management system bana rahe hain! DOM tree
 * navigate karke auto aur passengers manage karo. parentNode se upar jao,
 * closest() se ancestor dhundho, nextElementSibling / previousElementSibling
 * se aage peeche jao. Jaise auto stand pe auto ek line mein khade hote hain
 * aur queue mein aage peeche hote hain, waise hi DOM mein traverse karo.
 *
 * DOM Structure expected:
 *   <div class="queue-container">
 *     <div class="queue-item waiting">Auto 1</div>
 *     <div class="queue-item serving">Auto 2</div>
 *     <div class="queue-item completed">Auto 3</div>
 *   </div>
 *
 * Functions:
 *
 *   1. findQueueContainer(element)
 *      - From any element, traverses UP the DOM tree using closest()
 *      - Finds nearest ancestor (or self) with class "queue-container"
 *      - Returns the .queue-container element or null if not found
 *      - Agar element null/undefined, return null
 *
 *   2. getNextInQueue(element)
 *      - Returns the nextElementSibling of element
 *      - Returns null if there is no next sibling
 *      - Agar element null/undefined, return null
 *
 *   3. getPreviousInQueue(element)
 *      - Returns the previousElementSibling of element
 *      - Returns null if there is no previous sibling
 *      - Agar element null/undefined, return null
 *
 *   4. getQueuePosition(element)
 *      - Returns 1-based index of element among its parent's children
 *      - Uses parentNode.children to get siblings list
 *      - First child = position 1, second = 2, etc.
 *      - Agar element has no parentNode, return -1
 *      - Agar element null/undefined, return -1
 *
 *   5. moveToFront(element)
 *      - Moves element to be the FIRST child of its parent
 *      - Uses parentNode.insertBefore(element, parentNode.firstChild)
 *      - Returns true if moved successfully
 *      - Returns false if element is already first child
 *      - Returns false if element has no parent
 *      - Agar element null/undefined, return false
 *
 *   6. removeFromQueue(element)
 *      - Removes element from its parent using parentNode.removeChild()
 *      - Returns the removed element
 *      - Agar element has no parentNode, return null
 *      - Agar element null/undefined, return null
 *
 *   7. getQueueStats(queueContainer)
 *      - Counts children of queueContainer with specific classes
 *      - Returns {
 *          total: total number of children,
 *          waiting: count of children with class "waiting",
 *          serving: count of children with class "serving",
 *          completed: count of children with class "completed"
 *        }
 *      - Agar queueContainer null/undefined, return null
 *
 * Hint: element.parentNode se parent milta hai, element.closest(".class")
 *   se nearest ancestor milta hai, nextElementSibling/previousElementSibling
 *   se siblings milte hain. parentNode.children se saare children milte hain.
 *
 * @example
 *   // Given: <div class="queue-container"><div id="a1">A1</div><div id="a2">A2</div></div>
 *   const a2 = document.getElementById("a2");
 *
 *   findQueueContainer(a2);
 *   // => <div class="queue-container">...</div>
 *
 *   getNextInQueue(a1);
 *   // => <div id="a2">A2</div>
 *
 *   getQueuePosition(a2);
 *   // => 2
 *
 *   moveToFront(a2);
 *   // => true (a2 is now first child)
 *
 *   getQueueStats(container);
 *   // => { total: 2, waiting: 1, serving: 1, completed: 0 }
 */
export function findQueueContainer(element) {
  // Your code here
}

export function getNextInQueue(element) {
  // Your code here
}

export function getPreviousInQueue(element) {
  // Your code here
}

export function getQueuePosition(element) {
  // Your code here
}

export function moveToFront(element) {
  // Your code here
}

export function removeFromQueue(element) {
  // Your code here
}

export function getQueueStats(queueContainer) {
  // Your code here
}

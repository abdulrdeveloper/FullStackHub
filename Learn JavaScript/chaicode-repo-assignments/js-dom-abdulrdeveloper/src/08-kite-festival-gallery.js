/**
 * 🪁 Kite Festival Gallery - Dynamic Rendering from Data Arrays
 *
 * Uttarayan / Makar Sankranti ke kite festival ki photo gallery render
 * karna hai data se! Array mein kites ka data hai - naam, color, size,
 * maker, image. Har kite ke liye DOM element banao, gallery mein render
 * karo, filter karo, sort karo. Jaise aasmaaan mein hazaron patang udte
 * hain, waise hi screen pe gallery bhar do.
 *
 * Functions:
 *
 *   1. renderKiteCard(kite)
 *      - Takes { name, color, size, maker, image } object
 *      - Creates div.kite-card containing:
 *        - img with src=image, alt=name
 *        - h3.kite-name with textContent=name
 *        - p.kite-maker with textContent="by {maker}"
 *        - p.kite-info with textContent="{size} - {color}"
 *      - Returns the div element
 *      - Agar kite null/undefined or missing required fields
 *        (name, color, size, maker, image), return null
 *
 *   2. renderGallery(container, kites)
 *      - Clears container's innerHTML (removes all existing children)
 *      - Renders each kite using renderKiteCard
 *      - Appends each card to container
 *      - Skips null results from renderKiteCard (invalid kites)
 *      - Returns number of kites successfully rendered
 *      - Agar container null/undefined, return -1
 *      - Agar kites not array, return -1
 *
 *   3. filterKites(container, kites, filterFn)
 *      - Filters kites array using filterFn (callback that takes kite, returns bool)
 *      - Renders ONLY the filtered kites in container (clears first)
 *      - Returns count of visible (rendered) kites
 *      - Agar container null, return -1
 *      - Agar kites not array or filterFn not function, return -1
 *
 *   4. sortAndRender(container, kites, sortField, order)
 *      - Creates a COPY of kites array (don't modify original)
 *      - Sorts copy by sortField (e.g., "name", "size", "color")
 *      - order: "asc" for ascending, "desc" for descending
 *      - Renders sorted kites in container
 *      - Returns the sorted array copy
 *      - Agar container null, return []
 *      - Agar kites not array, return []
 *      - Default order is "asc" if not provided
 *
 *   5. renderEmptyState(container, message)
 *      - Checks if container has any child elements
 *      - If container is EMPTY (no children): creates p.empty-state with
 *        textContent=message and appends to container. Returns true.
 *      - If container already HAS children: does nothing. Returns false.
 *      - Agar container null/undefined, return false
 *
 * Hint: innerHTML = "" se container khali karo. Array.filter() se filter,
 *   Array.sort() se sort karo. Spread [...array] se copy banao.
 *
 * @example
 *   const kite = {
 *     name: "Patang Raja",
 *     color: "Red",
 *     size: "Large",
 *     maker: "Kite Master Ali",
 *     image: "patang.jpg"
 *   };
 *   const card = renderKiteCard(kite);
 *   // => <div class="kite-card">
 *   //      <img src="patang.jpg" alt="Patang Raja">
 *   //      <h3 class="kite-name">Patang Raja</h3>
 *   //      <p class="kite-maker">by Kite Master Ali</p>
 *   //      <p class="kite-info">Large - Red</p>
 *   //    </div>
 *
 *   renderGallery(container, [kite1, kite2, kite3]);
 *   // => 3 (three kite cards rendered in container)
 *
 *   filterKites(container, kites, k => k.color === "Red");
 *   // => 1 (only red kites shown)
 */
export function renderKiteCard(kite) {
  // Your code here
}

export function renderGallery(container, kites) {
  // Your code here
}

export function filterKites(container, kites, filterFn) {
  // Your code here
}

export function sortAndRender(container, kites, sortField, order) {
  // Your code here
}

export function renderEmptyState(container, message) {
  // Your code here
}

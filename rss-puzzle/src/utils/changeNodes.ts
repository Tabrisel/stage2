export default function swapNodes(node1: Node, node2: Node) {
    const parent1 = node1.parentNode as Node;
    const parent2 = node2.parentNode as Node;
    const nextNode1 = node1.nextSibling as Node | null;
    const nextNode2 = node2.nextSibling as Node | null;

    if (parent1 && parent2) {
        if (nextNode1) {
            parent1.insertBefore(node2, nextNode1);
        } else {
            parent1.appendChild(node2);
        }
        if (nextNode2) {
            parent2.insertBefore(node1, nextNode2);
        } else {
            parent2.appendChild(node1);
        }
    }
}

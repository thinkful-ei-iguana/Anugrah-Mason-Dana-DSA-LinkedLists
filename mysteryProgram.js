/* eslint-disable indent */
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) { // Requires that there at least 2 nodes
            if (newNode.next.value === current.value) { // If the value of the current Node = value of next node
                newNode.next = newNode.next.next; // Then cut the next Node from the list
            }
            else {
                newNode = newNode.next; // Otherwise moves on to the next Node
            }
        }                               
        current = current.next;        // Moves on to the next node to compare against the other nodes
    }
}

// This Algorithm checks for any repeating values and removes the repeated value from the list
// The Big O would be O(n^2)


//a faire une fonction pour interchanger 
function sl() { //interchanger au gauche
    const table = document.getElementById('V_G');
    const panel = document.getElementById('V_D');
  
    table.style.transition = 'width 2.5s ease';
    panel.style.transition = 'width 2.5s ease';
  
    table.style.width = '61%';
    panel.style.width = '37%';
  }
  
  function sr() {
    const table = document.getElementById('V_G');
    const panel = document.getElementById('V_D');
  
    table.style.transition = 'width 2s ease';
    panel.style.transition = 'width 2s ease';
  
    table.style.width = '37%';
    panel.style.width = '61%';
  }
  


  //exercice c;  
  function cacher() {
    const wordTableWrapper = document.getElementById('V_G');
    const rightPanel = document.getElementById('V_D');
    const rightBarMainBar = document.getElementById('right_bar_main_bar');
    const blueBarImage = document.getElementById('b_barre');
    const cacherBlueBarImage = document.getElementById('cacher_b_barre');

    // Add smooth transitions
    wordTableWrapper.style.transition = 'width 0.3s ease';
    rightPanel.style.transition = 'width 0.3s ease';

    // Expand left panel and minimize right panel
    wordTableWrapper.style.width = '95%';
    rightPanel.style.width = '2%';

    // Hide main content of right panel but keep blue bar visible
    rightBarMainBar.style.display = 'none';
    
    // Switch visibility of the toggle buttons
    blueBarImage.style.display = 'none';
    cacherBlueBarImage.style.display = 'block';
}

function montrer() {
    const wordTableWrapper = document.getElementById('V_G');
    const rightPanel = document.getElementById('V_D');
    const rightBarMainBar = document.getElementById('right_bar_main_bar');
    const blueBarImage = document.getElementById('b_barre');
    const cacherBlueBarImage = document.getElementById('cacher_b_barre');

    // Add smooth transitions
    wordTableWrapper.style.transition = 'width 0.3s ease';
    rightPanel.style.transition = 'width 0.3s ease';

    // Restore original widths
    wordTableWrapper.style.width = '60%';
    rightPanel.style.width = '37%';

    // Show main content of right panel
    rightBarMainBar.style.display = 'block';
    
    // Switch visibility of the toggle buttons
    blueBarImage.style.display = 'block';
    cacherBlueBarImage.style.display = 'none';
}



//exercice b; ( une fonction Javascript lit le contenu du tableau à partir d'une table JavaScript)
var verbs = [
    ["Base form", "Past tense", "Past participle", "Translation"],
    ["abide", "abode", "abode", "demeurer"],
    ["awake", "awoke", "awoken", "(se) réveiller, aussi awake/awoke/awoke"],
    ["be", "was/were", "been", "être"],
    ["bear", "bore", "borne", "porter/supporter/soutenir"],
    ["beat", "beat", "beaten", "battre"],
    ["become", "became", "become", "become"],
    ["beget", "begat", "begotten", "engendrer, aussi beget/begot/begotten"],
    ["begin", "began", "begun", "commencer"],
    ["bend", "bent", "bent", "se courber, etc."],
    ["bereave", "bereft", "bereft", "déposséder/priver"],
    ["bring", "brought", "brought", "apporter"],
    ["build", "built", "built", "construire"],
    ["burn", "burnt", "burnt", "brûler"],
    ["burst", "burst", "burst", "éclater"],
    ["buy", "bought", "", "acheter"],
    ["cast", "cast", "cast", "jeter, etc."],
    ["catch", "caught", "caught", "attraper"],
    ["ccacher", "chid", "chidden", "gronder/réprimander, aussi ccacher/chid/chid"],
    ["choose", "chose", "chosen", "choisir"],
    ["cleave", "cleft", "cleft", "fendre/coller, aussi cleave/clove/clove"],
    ["cling", "clung", "clung", "se cramponner"],
    ["come", "came", "come", "venir"],
    ["cost", "cost", "cost", "coûter"],
    ["creep", "crept", "crept", "ramper/se glisser/se hérisser"],
    ["crow", "crew", "crowed", "chanter (un coq)/jubiler"],
    ["cut", "cut", "cut", "couper"],
    ["deal", "dealt", "dealt", "distribuer/traiter"],
    ["dig", "dug", "dug", "bêcher"],
    ["do", "did", "", "faire"],
    ["draw", "drew", "drawn", "tirer/dessiner"],
    ["dream", "dreamt", "dreamt", "rêver"],
    ["drink", "drank", "drunk", "boire"],
    ["drive", "drove", "driven", "conduire"],
    ["dwell", "dwelt", "dwelt", "habiter/rester"],
    ["eat", "ate", "eaten", "manger"],
    ["fall", "fell", "fallen", "tomber"],
    ["feed", "fed", "fed", "nourrir"],
    ["feel", "felt", "felt", "(se) sentir"],
    ["fight", "fought", "fought", "combattre"],
    ["find", "found", "found", "trouver"],
];


// Global variable to track the current verb being viewed/updated
let currentVerbIndex = null;

// Create a modal dialog for viewing verb details (read-only)
function createViewModal(verb) {
    // Create a modal container
    const modal = document.createElement('div');
    modal.id = 'view-modal';
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        width: 500px;
    `;

    // Modal content
    modal.innerHTML = `
        <h2>Verb Details</h2>
        <div>
            <p><strong>Base Form:</strong> ${verb[0]}</p>
            <p><strong>Past Tense:</strong> ${verb[1]}</p>
            <p><strong>Past Participle:</strong> ${verb[2]}</p>
            <p><strong>Translation:</strong> ${verb[3]}</p>
            <p><strong>Synonyms:</strong> ${verb[4] || 'N/A'}</p>
            <p><strong>Example Sentence:</strong> ${verb[5] || 'N/A'}</p>
            <p><strong>Related Images:</strong> ${verb[6] || 'N/A'}</p>
        </div>
        <div style="margin-top: 15px;">
            <button onclick="closeViewModal()">Close</button>
        </div>
    `;

    // Add overlay
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 999;
    `;

    // Append modal and overlay to body
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
}

// Create a modal dialog for updating verb details
function createUpdateModal(verb) {
    // Create a modal container
    const modal = document.createElement('div');
    modal.id = 'update-modal';
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        width: 500px;
    `;

    // Modal content
    modal.innerHTML = `
        <h2>Update Verb Details</h2>
        <form id="update-verb-form">
            <div>
                <label>Base Form:</label>
                <input type="text" name="baseForm" value="${verb[0]}" required>
            </div>
            <div>
                <label>Past Tense:</label>
                <input type="text" name="pastTense" value="${verb[1]}" required>
            </div>
            <div>
                <label>Past Participle:</label>
                <input type="text" name="pastParticiple" value="${verb[2]}" required>
            </div>
            <div>
                <label>Translation:</label>
                <input type="text" name="translation" value="${verb[3]}" required>
            </div>
            <div>
                <label>Synonyms:</label>
                <input type="text" name="synonyms" value="${verb[4] || ''}">
            </div>
            <div>
                <label>Example Sentence:</label>
                <textarea name="example">${verb[5] || ''}</textarea>
            </div>
            <div>
                <label>Related Images (URL):</label>
                <input type="text" name="images" value="${verb[6] || ''}">
            </div>
            <div style="margin-top: 15px;">
                <button type="button" onclick="saveVerbUpdate()">Save Update</button>
                <button type="button" onclick="closeUpdateModal()">Cancel</button>
            </div>
        </form>
    `;

    // Add overlay
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 999;
    `;

    // Append modal and overlay to body
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
}

// View verb details (read-only)
function viewVerbDetails(index) {
    // Ensure index is valid
    if (index < 1 || index >= verbs.length) {
        alert("Invalid verb index!");
        return;
    }

    // Store the current verb index
    currentVerbIndex = index;

    // Get the verb to view
    const verb = verbs[index];

    // Create and show the view modal
    createViewModal(verb);
}

// Prepare for updating verb
function prepareUpdateVerb(index) {
    // Ensure index is valid
    if (index < 1 || index >= verbs.length) {
        alert("invalid");
        return;
    }

    // Store the current verb index
    currentVerbIndex = index;

    // Get the verb to update
    const verb = verbs[index];

    // Create and show the update modal
    createUpdateModal(verb);
}

// Save updated verb details
function saveVerbUpdate() {
    // Ensure we have a valid index
    if (currentVerbIndex === null) {
        alert("No verb selected for update!");
        return;
    }

    // Get form values
    const form = document.getElementById('update-verb-form');
    
    // Update the verb in the array with new values
    verbs[currentVerbIndex] = [
        form.baseForm.value,
        form.pastTense.value,
        form.pastParticiple.value,
        form.translation.value,
        form.synonyms.value,
        form.example.value,
        form.images.value
    ];

    // Close the modal and refresh the table
    closeUpdateModal();
    displayNames();
    alert("Verb updated successfully!");

    // Reset the current verb index
    currentVerbIndex = null;
}

// Close the view modal
function closeViewModal() {
    const modal = document.getElementById('view-modal');
    const overlay = document.getElementById('modal-overlay');
    
    if (modal) document.body.removeChild(modal);
    if (overlay) document.body.removeChild(overlay);
}

// Close the update modal
function closeUpdateModal() {
    const modal = document.getElementById('update-modal');
    const overlay = document.getElementById('modal-overlay');
    
    if (modal) document.body.removeChild(modal);
    if (overlay) document.body.removeChild(overlay);
}

// Display table of verbs
function displayNames() {
    var table = document.getElementById("T_D");
    var table_content = `
    <tr>
        <th>${verbs[0][0]}</th>
        <th>${verbs[0][1]}</th>
        <th>${verbs[0][2]}</th>
        <th>${verbs[0][3]}</th>
        <th>Actions</th>
    </tr>`;

    verbs.slice(1).forEach((verb, index) => {
        table_content += `
        <tr>
            <td>${verb[0]}</td>
            <td>${verb[1]}</td>
            <td>${verb[2]}</td>
            <td>${verb[3]}</td>
            <td>
                <button onClick='viewVerbDetails(${index + 1})'>Edit</button>
                <button onClick='prepareUpdateVerb(${index + 1})'>Update</button>
                <button onClick='confirmDelete(${index + 1})'>Delete</button>
            </td>
        </tr>`;
    });

    table.innerHTML = table_content;
}

// Delete verb functionality
function confirmDelete(index) {
    if (index < 1 || index >= verbs.length) {
        alert("Invalid index! Please select a valid verb index.");
        return;
    }

    var answer = prompt("Are you sure you want to delete the verb? (Answer 'y' for yes and 'n' for no)");
    if (answer === 'y') {
        // Store the first letter of the verb being deleted
        const deletedLetter = verbs[index][0].charAt(0).toLowerCase();
        
        // Delete the verb
        verbs.splice(index, 1);
        
        // Check if any verbs remain with this letter
        const hasRemainingVerbs = verbs.slice(1).some(verb => 
            verb[0].charAt(0).toLowerCase() === deletedLetter
        );
        
        // Update display and statistics
        displayNames();
        
        // If no verbs remain with this letter, update the links
        if (!hasRemainingVerbs) {
            A_L();
        }
        
        // Update statistics in any case
        updateStatistics();
        
        alert("Verb deleted successfully!");
    } else if (answer === 'n') {
        alert("Deletion canceled.");
    } else {
        alert("Invalid input. Please type 'y' or 'n'.");
    }
}


// Initialize table on page load
window.onload = function() {
    displayNames();
};
function A_L() {
    const linkList = document.getElementById('L_L');
    const letters = new Set();
    
    // Collect all unique first letters from verbs
    verbs.slice(1).forEach(verb => {
        letters.add(verb[0].charAt(0).toLowerCase());
    });
    
    // Sort letters alphabetically
    const sortedLetters = Array.from(letters).sort();
    
    // Create links for each letter
    let linkContent = '';
    sortedLetters.forEach(letter => {
        linkContent += `
            <li>
                <a href="#" onclick="scrollToLetter('${letter}')">
                    Here is a link to verbs that start with the letter <span>${letter}</span>
                </a>
            </li>`;
    });
    
    linkList.innerHTML = linkContent;
}

// Function to scroll to verbs starting with specific letter
function scrollToLetter(letter) {
    const table = document.getElementById('T_D');
    const rows = table.getElementsByTagName('tr');
    
    // Reset all rows to default style
    for (let i = 1; i < rows.length; i++) {
        rows[i].style.color = '';
    }
    
    // Find first verb starting with the letter
    for (let i = 1; i < rows.length; i++) {
        const firstLetter = rows[i].cells[0].textContent.charAt(0).toLowerCase();
        if (firstLetter === letter.toLowerCase()) {
            // Highlight the row
            rows[i].style.color = 'red';
            // Scroll to the row
            rows[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}

// Function to add a new verb
function addVerb() {
    // Create modal for input
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border: 2px solid black;
        z-index: 1000;
    `;
    
    modal.innerHTML = `
        <h3>Add New Verb</h3>
        <div>
            <label>Base Form: </label>
            <input type="text" id="newBaseForm" required>
        </div>
        <div>
            <label>Past Tense: </label>
            <input type="text" id="newPastTense">
        </div>
        <div>
            <label>Past Participle: </label>
            <input type="text" id="newPastParticiple">
        </div>
        <div>
            <label>Translation: </label>
            <input type="text" id="newTranslation">
        </div>
        <button onclick="submitNewVerb()">Add</button>
        <button onclick="closeAddModal()">Cancel</button>
    `;
    
    document.body.appendChild(modal);
}

// Function to submit new verb
function submitNewVerb() {
    const baseForm = document.getElementById('newBaseForm').value;
    const pastTense = document.getElementById('newPastTense').value;
    const pastParticiple = document.getElementById('newPastParticiple').value;
    const translation = document.getElementById('newTranslation').value;
    
    // Validate base form
    if (!baseForm) {
        alert('Base form is required!');
        return;
    }
    
    // Create new verb array
    const newVerb = [baseForm, pastTense, pastParticiple, translation];
    
    // Find insertion point for alphabetical order
    let insertIndex = 1;
    for (let i = 1; i < verbs.length; i++) {
        if (baseForm.toLowerCase() < verbs[i][0].toLowerCase()) {
            insertIndex = i;
            break;
        }
        insertIndex = i + 1;
    }
    
    // Insert the new verb
    verbs.splice(insertIndex, 0, newVerb);
    
    // Update display
    displayNames();
    A_L();
    
    // Highlight incomplete fields with red border
    const row = document.querySelector(`#T_D tr:nth-child(${insertIndex + 1})`);
    if (!pastTense || !pastParticiple || !translation) {
        row.style.border = '2px solid red';
    }
    
    closeAddModal();
}

// Function to close add verb modal
function closeAddModal() {
    const modal = document.querySelector('div[style*="position: fixed"]');
    if (modal) {
        document.body.removeChild(modal);
    }
}

// Function to search for a verb
function search() {
    const searchInput = document.getElementById('searsh_input').value.toLowerCase();
    const table = document.getElementById('T_D');
    const rows = table.getElementsByTagName('tr');
    
    // Reset all rows to default style
    for (let i = 1; i < rows.length; i++) {
        rows[i].style.color = '';
    }
    
    // Find the verb
    for (let i = 1; i < rows.length; i++) {
        const verb = rows[i].cells[0].textContent.toLowerCase();
        if (verb === searchInput) {
            // Highlight and scroll to the found verb
            rows[i].style.color = 'red';
            rows[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}

// Function to update statistics
function updateStatistics() {
    const statisticsDiv = document.getElementById('statistisc');
    const letterCounts = {};
    
    // Count verbs for each letter (excluding header row)
    verbs.slice(1).forEach(verb => {
        const firstLetter = verb[0].charAt(0).toLowerCase();
        letterCounts[firstLetter] = (letterCounts[firstLetter] || 0) + 1;
    });
    
    // Calculate average
    const totalVerbs = Object.values(letterCounts).reduce((a, b) => a + b, 0);
    const uniqueLetters = Object.keys(letterCounts).length;
    const average = uniqueLetters ? Math.round(totalVerbs / uniqueLetters) : 0;
    
    // Create statistics string
    let statsText = `${average} verbs on average per letter : `;
    
    // Add individual letter counts
    statsText += Object.entries(letterCounts)
        .sort((a, b) => a[0].localeCompare(b[0])) // Sort alphabetically
        .map(([letter, count]) => `${letter}→${count}`)
        .join(' ');
    
    statisticsDiv.textContent = statsText;
}

// Modify the display_letters function to only show existing letters
function A_L() {
    const linkList = document.getElementById('L_L');
    const letters = new Set();
    
    // Collect only letters that have verbs
    verbs.slice(1).forEach(verb => {
        letters.add(verb[0].charAt(0).toLowerCase());
    });
    
    // Sort letters alphabetically
    const sortedLetters = Array.from(letters).sort();
    
    // Create links for each letter
    let linkContent = '';
    sortedLetters.forEach(letter => {
        linkContent += `
            <li>
                <a href="#" onclick="scrollToLetter('${letter}')">
                    Here is a link to verbs that start with the letter <span>${letter}</span>
                </a>
            </li>`;
    });
    
    linkList.innerHTML = linkContent;
    
    // Update statistics after updating links
    updateStatistics();

}


// Initialize the display on page load
window.onload = function() {
    displayNames();
    A_L();
    updateStatistics();
}

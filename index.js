const triangulumMap = {
    'A': '▲',
    'B': '▼',
    'C': '◄',
    'D': '►',
    'E': '▲▼',
    'F': '▲◄',
    'G': '▲►',
    'H': '▼▲',
    'I': '▼▼',
    'J': '◄▲',
    'K': '◄▼',
    'L': '►▲',
    'M': '►▼',
    'N': '▲▲',
    'O': '▼▼▼',
    'P': '▲◄◄',
    'Q': '▲►►',
    'R': '▼◄◄',
    'S': '▼►►',
    'T': '▲▼▼',
    'U': '◄◄▲',
    'V': '◄◄▼',
    'W': '►►▲',
    'X': '▲▼▲',
    'Y': '▲▼▼▼',
    'Z': '▼▲▼',
    ' ': '/'
};

document.getElementById('TranslateBtn').addEventListener('click', function() {
    const text1 = document.getElementById('text1').value.trim().toUpperCase();
    const text2 = document.getElementById('text2').value.trim().toUpperCase();
    let result = '';

    if (text1) {

        if (!isValidTriangulumInput(text1)) {
            alert('A Triangulum code must have dashes(-) between letters and slashes(\).');
            return;
        }
        result = translateTriangulumToEnglish(text1);
        document.getElementById('text2').value = result;
    } else if (text2) {
        result = translateEnglishToTriangulum(text2);
        document.getElementById('text1').value = result;
    } else {
        alert('Please enter text in one of the fields.');
    }
});

document.getElementById('ClearBtn').addEventListener('click', function(){
    document.getElementById('text1').value = null
    document.getElementById('text2').value = null
});

function isValidTriangulumInput(input) {
    return input.includes('-') || input.includes('/');
}

function translateEnglishToTriangulum(text) {
    return text.split('').map(char => triangulumMap[char] || char).join('-');
}

function translateTriangulumToEnglish(triangulumText) {
    const reverseMap = Object.fromEntries(Object.entries(triangulumMap).map(([k, v]) => [v, k]));
    
    const codes = triangulumText.split('-');
    
    return codes.map(code => reverseMap[code] || code).join('');
}


fetch('https://ipinfo.io/json?token=70c78fefbdb6d0')  // optional token for more requests/day
    .then(res => res.json())
    .then(data => {
        console.log('IP Info:', data);
        const { ip, city, region, country, loc, org } = data;
        alert(`You are visiting from ${city}, ${region}, ${country}.\nYour IP: ${ip}\nISP: ${org}`);
    })
    .catch(err => {
        console.error('Could not get IP info:', err);
    });


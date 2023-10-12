document.getElementById('next1').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev1').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}


function redirectToTournamentPage() {
    // Use JavaScript to redirect to the desired HTML file
    window.location.href = 'tournament_r.html';
}
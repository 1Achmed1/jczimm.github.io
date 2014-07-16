var pusher = new Pusher('6bd9ea172357cea30784', { authEndpoint: 'omega-assets/pusher_auth.php' });
var channel = pusher.subscribe('private-leaderboard');
channel.bind('new_highscore', function (data) {
    console.log(data);
});

channel.bind('pusher:subscription_succeeded', function() {
    var triggered = channel.trigger('client-test', { "foo": "bar" });
});
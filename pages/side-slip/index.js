Page({
	data: {
		listData: [
			{
				title: "我要在这战火纷飞的俗世中打上停战的休止符，这就是神的使命。国国相战中，怎样才能迅速制止那战争呢？",
				description: "感受痛苦吧，体验痛苦吧，接受痛苦吧，了解痛苦吧。不知道痛苦的人是不会知道什么是和平。",
				images: "../../assets/image/swipe/1.jpg"
			},
			{
				title: "在我归于沉眠的这段时间，将一切都交给你，让你走在我的前面！那是我开启的道路，你为了达成目标，应作为斑尽享天年才是！作为..拯救这个世界的救世主！",
				description: "这世上的事并非皆能如你所愿，活得越久……看得越清，现实其实就是无奈，痛苦和空虚……听好了……在这世上，有光的地方就必定有阴影。诺以想一己之私，想要维持和平，必会招致战争，为了守护爱，便孕育出恨。此间因果，是无法斩断的，现实就是如此。现实世界，即是地狱。只有胜者，只有和平的世界，只有爱的世界，我就是想再造一个这样的世界。",
				images: "../../assets/image/swipe/2.jpg"
			},
			{
				title: "我现在决定了，我要走我自己的忍道，朝着一条绝对不会后悔的路，一直往前走！",
				description: "孤单一个人的，那种痛苦，真的不是一般的难受，你的心情不知道为什么，我觉得很清楚，不过，对我来说，已经找到了最珍惜的人们。我最珍惜的人们，我不会让你伤害他们，就算要杀了你，我也要阻止你。",
				images: "../../assets/image/swipe/3.jpg"
			},
			{
				title: "你知道你为什么这么弱吗，那是因为你的仇恨还不够深！！",
				description: "你逃吧，直到有了我一样的眼睛你再来找我，在此之前你就苟延残喘一样的活下去吧，哇哈哈哈哈哈~~~~~~",
				images: "../../assets/image/swipe/4.jpg"
			},
			{
				title: "我早已闭上了双眼，我的目的，只有在黑暗中才能实现。",
				description: "因为我认同你，你的确是很强，你跟我是一样的，我们都了解孤独的痛苦是什么，而且，那种痛苦可以让人变得更强，就是因为这样，我要借由断掉这层关系，得到比现在更强大的力量，从现在开始，我要跟你对等的交手。",
				images: "../../assets/image/swipe/5.jpg"
			},
			{
				title: "不能保护同伴的人，不配称之为忍者。",
				description: "很不巧的是我只有一个人，你说的那些家伙们已经一个都没有了，已经??全部被杀死了",
				images: "../../assets/image/swipe/6.jpg"
			}
		]
	},
	cellClick(e) {
		let {index} = e.currentTarget.dataset

		wx.showToast({
			title: `点击了第${index}个cell`,
			icon: 'none'
		});
	},
	delete(e) {
		let {index} = e.currentTarget.dataset

		wx.showToast({
			title: `删除了第${index}个cell`,
			icon: 'none'
		});
	},
	onLoad() {

	}
});


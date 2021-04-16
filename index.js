var app = new Vue({
	el: "#app",
	data: {
		select1: 1,
		select2: "",
		ap1: "s",
		va1: "",
		ap2: "",
		va2: "",
		ap3: "",
		va3: "",
		select_lv: "0",
		select_ap: "",
		ap_list: [],
		ap_lv0: [{
				label: "符能灵箭",
				value: "12+[n*50%]+[h*25%]+[f*25%]+[t*25%]"
			},
			{
				label: "闪电震爆",
				value: "6+[n*40%]+[h*20%]+[l*20%]"
			},
			{
				label: "雷暴打击",
				value: "20+[n*100%]+[l*55%]+[s*35%]"
			}, {
				label: "苍穹幻刃",
				value: "22+[n*130%]+[s*60%]+[h*60%]"
			}
		],
		ap_lv1: [{
				label: "炽焰魔球（火火火）",
				value: "23+[n*100%]+[h*100%]"
			}, {
				label: "强袭狂风（风风风）",
				value: "13+[n*50%]+[f*50%]"
			},
			{
				label: "闪雷击（雷雷雷）",
				value: "18+[n*80%]+[l*80%]"
			},
			{
				label: "泡泡封印（水水水）",
				value: "15+[n*60%]+[s*60%]"
			},
			{
				label: "岩石冲击（土土土）",
				value: "13+[n*50%]+[t*50%]"
			}
		],
		ap_lv2: [{
				label: "炽雷魔球（火火雷）",
				value: "24+[n*105%]+[h*80%]+[l*40%]"
			},
			{
				label: "狂澜季风（风风水）",
				value: "14+[n*60%]+[20%]+[f*40%]"
			},
			{
				label: "砂尘飓风（风风土）",
				value: "8+[n*30%]+[f*20%]+[t*10%]"
			},
			{
				label: "火雷击（雷雷火）",
				value: "19+[n*90%]+[l*55%]+[h*35%]"
			},
			{
				label: "符文灵箭（火风雷土）",
				value: "12+[n*50%]+[f*25%]+[t*25%]"
			}
		],
		ap_lv3: [{
				label: "炽砂魔球（火火土）",
				value: "26+[n*120%]+[h*80%]+[t*40%]"
			},
			{
				label: "雷雨击（雷雷水）",
				value: "20+[n*100%]+[l*55%]+[s*35%]"
			},
			{
				label: "雷霆审判（雷雷风）",
				value: "23+[n*110%]+[l*70%]+[f*40%]"
			},
			{
				label: "烈焰燃烧（火火风）",
				value: "24+[n*100%]+[h*80%]+[f*40%]"
			}
		],
		ap_lv4: [{
				label: "毒素扩散（水风雷雷）",
				value: "4+[n*30%]+[s*20%]+[l*20%]"
			},
			{
				label: "闪电震击（火火雷雷）",
				value: "6+[n*40%]+[h*20%]+[l*20%]"
			}
		],
		n: 0,
		s: 0,
		h: 0,
		f: 0,
		l: 0,
		t: 0,
		pve: "0",
		pvp: "0",
		count_str: ""
	},
	methods: {
		select1_change: function() {
			this.ap1 = "s";
			this.va1 = "";
			if (this.select1 == 1) {
				this.select2 = "";
				this.ap2 = "";
				this.va2 = "";
				this.ap3 = "";
				this.va3 = "";
			} else {
				this.ap2 = "h";
				this.va2 = "";
				if (this.select1 == 2) {
					if (this.select2 != 1 || this.select2 != 2 || this.select2 != 3) {
						this.select2 = 1;
					}
				} else if (this.select2 == 1 || this.select2 == "") {
					this.select2 = 3
				}
				if (this.select1 == 5) {
					this.ap3 = "f";
					this.va3 = "";
				} else {
					this.ap3 = "";
					this.va3 = "";
				}
			}
		},
		select_lv_change: function() {
			if (this.select_lv == 0) {
				this.ap_list = this.ap_lv0;
			} else if (this.select_lv == 1) {
				this.ap_list = this.ap_lv1;
			} else if (this.select_lv == 2) {
				this.ap_list = this.ap_lv2;
			} else if (this.select_lv == 3) {
				this.ap_list = this.ap_lv3;
			} else if (this.select_lv == 4) {
				this.ap_list = this.ap_lv4;
			}
			this.select_ap = this.ap_list[0].value;
		},
		count: function() {
			if (this.select1 == 1) {
				this.n = 26;
			} else if (this.select1 == 2) {
				if (this.select2 == 1) {
					this.n = 35;
				} else if (this.select2 == 2) {
					this.n = 38;
				} else if (this.select2 == 3) {
					this.n = 1;
					return;
				}
			} else if (this.select1 == 3) {
				if (this.select2 == 2) {
					this.n = 45;
				} else if (this.select2 == 3) {
					this.n = 50;
				} else if (this.select2 == 4) {
					this.n = 53;
				}
			} else if (this.select1 == 4) {
				if (this.select2 == 2) {
					this.n = 53;
				} else if (this.select2 == 3) {
					this.n = 58;
				} else if (this.select2 == 4) {
					this.n = 63;
				}
			} else if (this.select1 == 5) {
				if (this.select2 == 2) {
					this.n = 48;
				} else if (this.select2 == 3) {
					this.n = 54;
				} else if (this.select2 == 4) {
					this.n = 58;
				}
			}
			this.s = 0;
			this.h = 0;
			this.f = 0;
			this.l = 0;
			this.t = 0;
			this[this.ap1] = this.va1 * 1;
			this[this.ap2] = this.va2 * 1;
			this[this.ap3] = this.va3 * 1;
			var str = this.select_ap;
			str = str.replace(/n/g, this.n || 0);
			str = str.replace(/s/g, this.s || 0);
			str = str.replace(/h/g, this.h || 0);
			str = str.replace(/f/g, this.f || 0);
			str = str.replace(/l/g, this.l || 0);
			str = str.replace(/t/g, this.t || 0);
			str = str.replace(/%/g, "/100" || 0);
			str = str.replace(/\[/g, "Math.floor(");
			str = str.replace(/\]/g, ")");
			console.log(str);
			this.pve = eval(str);
			this.pvp = Math.floor(this.pve * 0.7);
		}
	},
	created: function() {
		this.ap_list = this.ap_lv0;
		this.select_ap = this.ap_list[0].value;
	}
});

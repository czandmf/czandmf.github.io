var app = new Vue({
	el: "#app",
	data: {
		select1: 1, // 符文石
		select2: "", // 品质
		ap1: "s",
		va1: "",
		ap2: "",
		va2: "",
		ap3: "",
		va3: "",
		select_lv: "1",
		select_ap: "",
		ap_list: [],
		ap_lv1: [{
				label: "炽焰魔球（火火火）",
				value: "23+[n*1]+[h*1]"
			}, {
				label: "强袭狂风（风风风）",
				value: "13+[n*0.5]+[f*0.5]"
			},
			{
				label: "闪雷击（雷雷雷）",
				value: "18+[n*0.8]+[l*0.8]"
			},
			{
				label: "泡泡封印（水水水）",
				value: "15+[n*0.6]+[s*0.6]"
			},
			{
				label: "岩石冲击（土土土）",
				value: "13+[n*0.5]+[t*0.5]"
			}
		],
		ap_lv2: [{
				label: "炽雷魔球（火火雷）",
				value: "24+[n*1.05]+[h*0.8]+[l*0.4]"
			},
			{
				label: "狂澜季风（风风水）",
				value: "14+[n*0.6]+[s*0.2]+[f*0.4]"
			},
			{
				label: "砂尘飓风（风风土）",
				value: "8+[n*0.3]+[f*0.2]+[t*0.1]"
			},
			{
				label: "火雷击（雷雷火）",
				value: "19+[n*0.9]+[l*0.55]+[h*0.35]"
			},
			{
				label: "符文灵箭（火风雷土）",
				value: "12+[n*0.5]+[f*0.25]+[t*0.25]"
			}
		],
		ap_lv3: [{
				label: "炽砂魔球（火火土）",
				value: "26+[n*1.2]+[h*0.8]+[t*0.4]"
			},
			{
				label: "雷雨击（雷雷水）",
				value: "20+[n*1]+[l*0.55]+[s*0.35]"
			},
			{
				label: "雷霆审判（电电风）",
				value: "23+[n*1.1]+[l*0.7]+[f*0.4]"
			},
			{
				label: "烈焰燃烧（火火风）",
				value: "24+[n*1]+[h*0.8]+[f*0.4]"
			}
		],
		ap_lv4: [],
		ap_lv5: [{
				label: "符能灵箭",
				value: "12+[n*0.5]+[h*0.25]+[f*0.25]+[t*0.25]"
			},
			{
				label: "闪电震爆",
				value: "6+[n*0.4]+[h*0.2]+[l*0.2]"
			},
			{
				label: "雷暴打击",
				value: "20+[n*1]+[l*0.55]+[s*0.35]"
			}, {
				label: "苍穹幻刃",
				value: "22+[n*1.3]+[s*0.6]+[h*0.6]"
			}
		],
		n: 0,
		s: 0,
		h: 0,
		f: 0,
		l: 0,
		t: 0,
		pve: "0",
		pvp: "0"
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
					this.select2 = 2
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
			if (this.select_lv == 1) {
				this.ap_list = this.ap_lv1;
			} else if (this.select_lv == 2) {
				this.ap_list = this.ap_lv2;
			} else if (this.select_lv == 3) {
				this.ap_list = this.ap_lv3;
			} else if (this.select_lv == 4) {
				this.ap_list = this.ap_lv4;
			} else if (this.select_lv == 5) {
				this.ap_list = this.ap_lv5;
			}
			this.select_ap = this.ap_list[0].value;
		},
		count: function() {
			if (this.select1 == 1) {
				this.n = 26; // 学徒级
			} else if (this.select1 == 2) {
				if (this.select2 == 1) {
					this.n = 35; // 普通 入门
				} else if (this.select2 == 2) {
					this.n = 38; // 精良 入门
				} else if (this.select2 == 3) {
					this.n = 1; // 史诗 入门
				}
			} else if (this.select1 == 3) {
				if (this.select2 == 2) {
					this.n = 1; // 精良 专家
				} else if (this.select2 == 3) {
					this.n = 50; // 史诗 专家
				} else if (this.select2 == 4) {
					this.n = 53; // 传说 专家
				}
			} else if (this.select1 == 4) {
				if (this.select2 == 2) {
					this.n = 1; // 精良 大师
				} else if (this.select2 == 3) {
					this.n = 58; // 史诗 大师
				} else if (this.select2 == 4) {
					this.n = 63; // 传说 大师
				}
			} else if (this.select1 == 5) {
				if (this.select2 == 2) {
					this.n = 48; // 精良 博学者
				} else if (this.select2 == 3) {
					this.n = 54; // 史诗 博学者
				} else if (this.select2 == 4) {
					this.n = 58; // 传说 博学者
				}
			}
			this.s = 0;
			this.h = 0;
			this.f = 0;
			this.l = 0;
			this.t = 0;
			this[this.ap1] = this.va1;
			this[this.ap2] = this.va2;
			this[this.ap3] = this.va3;
			var str = this.select_ap;
			str = str.replace(/n/g, this.n || 0);
			str = str.replace(/s/g, this.s || 0);
			str = str.replace(/h/g, this.h || 0);
			str = str.replace(/f/g, this.f || 0);
			str = str.replace(/l/g, this.l || 0);
			str = str.replace(/t/g, this.t || 0);
			str = str.replace(/\[/g, "Math.floor(");
			str = str.replace(/\]/g, ")");
			this.pve = eval(str);
			this.pvp = Math.floor(this.pve * 0.7);
		}
	},
	created: function() {
		this.ap_list = this.ap_lv1;
		this.select_ap = this.ap_list[0].value;
	}
});

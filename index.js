var app = new Vue({
	el: "#app",
	data: {
		select1: 1, // 符文石
		select2: 1, // 品质
		ap1: "s",
		va1: "",
		ap2: "",
		va2: "",
		ap3: "",
		va3: "",
		select_lv: "5",
		select_ap: "",
		ap_list: [],
		ap_lv1: [{
				label: "水魔法",
				value: "ap1"
			}, {
				label: "火魔法",
				value: "ap2"
			},
			{
				label: "风魔法",
				value: "ap3"
			},
			{
				label: "雷魔法",
				value: "ap4"
			},
			{
				label: "土魔法",
				value: "ap5"
			}
		],
		ap_lv2: [{
			label: "",
			value: "ap1"
		}],
		ap_lv3: [{
			label: "",
			value: "ap1"
		}],
		ap_lv4: [{
			label: "",
			value: "ap1"
		}],
		ap_lv5: [{
			label: "苍穹幻刃",
			value: "22+[n*1.3]+[s*0.6]+[h*0.6]"
		}],
		n: 0,
		s: 0,
		h: 0,
		f: 0,
		l: 0,
		t: 0,
		pve: "100",
		pvp: "70"
	},
	methods: {
		select1_change: function() {
			this.ap1 = "s";
			this.va1 = "";
			if (this.select1 == 1) {
				this.select2 = 1;
				this.ap2 = "";
				this.va2 = "";
			} else {
				this.ap2 = "h";
				this.va2 = "";
				if (this.select2 == 1) {
					this.select2 = 2;
				}
				if (this.select1 == 4) {
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
		},
		count: function() {
			if (this.select1 == 1) {
				this.n = 1;
			} else if (this.select1 == 2) {
				if (this.select2 == 2) {
					this.n = 1;
				} else if (this.select2 == 3) {
					this.n = 1;
				} else if (this.select2 == 4) {
					this.n = 1;
				}
			} else if (this.select1 == 3) {
				if (this.select2 == 2) {
					this.n = 1;
				} else if (this.select2 == 3) {
					this.n = 1;
				} else if (this.select2 == 4) {
					this.n = 63;
				}
			} else if (this.select1 == 4) {
				if (this.select2 == 2) {
					this.n = 1;
				} else if (this.select2 == 3) {
					this.n = 1;
				} else if (this.select2 == 4) {
					this.n = 1;
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
			console.log(str);
			this.pve = eval(str);
			this.pvp = Math.floor(this.pve * 0.7);
		}
	},
	created: function() {
		this.ap_list = this.ap_lv5;
		this.select_ap = this.ap_list[0].value;
	}
});

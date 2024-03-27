class BloedglucoseMeting {
  constructor(Id, Datum, MT, BgVoorMT, BgNaMT) {
    this.Id = Id;
    this.Datum = Datum;
    this.MT = MT;
    this.BgVoorMT = BgVoorMT;
    this.BgNaMT = BgNaMT;
  }
  VerschilVoorNa() {
    return this.BgNaMT - this.BgVoorMT;
  }
}

export default BloedglucoseMeting;

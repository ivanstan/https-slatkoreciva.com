export class Cards {
  public static list = [
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/b63725e367923e9d1f65ab0239e76b7f/5E033A39/t51.2885-15/sh0.08/e35/s640x640/68898094_476745479824384_7418517353452604332_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/912fb91925daa65cb3d8e2a88814e028/5E0DD115/t51.2885-15/sh0.08/e35/s640x640/67404669_3216277658382232_6272020232381583358_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/86e8a1ef875a480db939d7fd107b4956/5E00F9FF/t51.2885-15/sh0.08/e35/s640x640/68676581_3409807542366392_3596379676197950028_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/fee662fe3662328edd0480183c1319a2/5DFBA2E2/t51.2885-15/sh0.08/e35/s640x640/69499946_408121276481542_2407029172164313193_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/1d84ad486185838fc05b74068f917120/5E148F14/t51.2885-15/sh0.08/e35/s640x640/66828856_676074839573185_8240057042087981004_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/1188d23555101dc8543c5d2cf618fd25/5DF05AAF/t51.2885-15/sh0.08/e35/s640x640/66225016_163899338074899_2867358432944177728_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/308f657bc55d9c5d210dbee8f76d522d/5E1111D8/t51.2885-15/sh0.08/e35/s640x640/67742469_124994735426695_8817122312469349845_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/31fcd6d5772a75d5bc5e4c7598c77256/5DF9686C/t51.2885-15/sh0.08/e35/s640x640/66401223_1728611017437449_4692447822969009088_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/ed251a839c3b926cb48fb66f8632f2ea/5E07B1B5/t51.2885-15/sh0.08/e35/s640x640/66033185_2378949092431088_1542079009179141621_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/3576fd7e334a884081c74419e0af4090/5E0EAF42/t51.2885-15/sh0.08/e35/s640x640/66652153_149068082818734_6082841898517746652_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/01f1736a5be517493a46ef6be7500e7c/5E0C6FB4/t51.2885-15/sh0.08/e35/s640x640/65860271_225781848394721_7165216364672907796_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/01f1736a5be517493a46ef6be7500e7c/5E0C6FB4/t51.2885-15/sh0.08/e35/s640x640/65860271_225781848394721_7165216364672907796_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/1e25fc64a2c6f2e0dc8f9571fc40adf1/5DF7DC66/t51.2885-15/sh0.08/e35/s640x640/65200599_2461643723873699_7982801778959990346_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/cd13706696744a602c9d8abbcd4457f6/5E0A6C76/t51.2885-15/sh0.08/e35/s640x640/66022073_508674786603622_1016794157384536759_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/003f4d36c405789196df6f129d3d4199/5E0C6D61/t51.2885-15/sh0.08/e35/s640x640/65166475_354653415199002_6332145752902334526_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/59a36aae61062ac64f4c855ef97a8d9b/5DF856B3/t51.2885-15/sh0.08/e35/s640x640/65125286_370395563664569_7052718073035140964_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
    'https://instagram.fbeg2-1.fna.fbcdn.net/vp/ccb511a53e4f74ddadc1dd6402bea707/5DFEF73F/t51.2885-15/sh0.08/e35/s640x640/66281761_364677270903640_496826895350088976_n.jpg?_nc_ht=instagram.fbeg2-1.fna.fbcdn.net',
  ];

  public static getLatest(number: number) {
    return Cards.list.splice(0, number);
  }
}

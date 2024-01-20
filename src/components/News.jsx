import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  articles = [
    {
      source: { id: "wired", name: "Wired" },
      author: "Matt Burgess",
      title:
        "Scammers Are Tricking Anti-Vaxxers Into Buying Bogus Medical Documents",
      description:
        "On Telegram, scammers are impersonating doctors to sell fake Covid-19 vaccination certificates and other products, showing how criminals are taking advantage of conspiracy theories.",
      url: "https://www.wired.com/story/telegram-covid-19-vaccination-fakes/",
      urlToImage:
        "https://media.wired.com/photos/657cdc0f0bfff3d8273cf8dd/191:100/w_1280,c_limit/Anti-Vaxxers-sold-fake-medical-docs-Security-GettyImages-924224840.jpg",
      publishedAt: "2023-12-18T12:00:00Z",
      content:
        "Draper and Proops say the efforts used repeated messaging, often replying to verified accounts on X that are linked to anti-vaccination sentiments, and consistently mentioned conspiracy theories such… [+2346 chars]",
    },
    {
      source: { id: null, name: "ReadWrite" },
      author: "Radek Zielinski",
      title: "El Salvador Bitcoin bonds clear regulatory hurdle",
      description:
        "El Salvador’s ambitious plan to issue $1 billion in sovereign “Volcano Bonds” backed by Bitcoin has cleared a significant obstacle, […]\nThe post El Salvador Bitcoin bonds clear regulatory hurdle appeared first on ReadWrite.",
      url: "https://readwrite.com/el-salvador-bitcoin-bonds-clear-regulatory-hurdle/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/El-Salvador-Bitcoin-bonds.jpg",
      publishedAt: "2023-12-12T19:30:08Z",
      content:
        "El Salvador’s ambitious plan to issue $1 billion in sovereign “Volcano Bonds” backed by Bitcoin has cleared a significant obstacle, bringing the pioneering offering closer to fruition, according to a… [+1954 chars]",
    },
    {
      source: { id: null, name: "ReadWrite" },
      author: "Maxwell William",
      title:
        "Bitcoin soars above $45,000 in New Year rally, eyes on SEC for ETF approvals",
      description:
        "The cryptocurrency market kicked off the new year with a bang as Bitcoin surged past the $45,000 mark for the […]\nThe post Bitcoin soars above $45,000 in New Year rally, eyes on SEC for ETF approvals appeared first on ReadWrite.",
      url: "https://readwrite.com/bitcoin-soars-above-45000-in-new-year-rally-eyes-on-sec-for-etf-approvals/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/Bitcoin-gathers-momentum.jpg",
      publishedAt: "2024-01-02T10:24:46Z",
      content:
        "The cryptocurrency market kicked off the new year with a bang as Bitcoin surged past the $45,000 mark for the first time since early April 2022, recording a significant 7% increase on the first day o… [+1706 chars]",
    },
    {
      source: { id: null, name: "ReadWrite" },
      author: "Cameron Macpherson",
      title: "Bitcoin price surges by 175% amid US ETF hopes",
      description:
        "The price of Bitcoin has seen its biggest value boost since the 2022 cryptocurrency market crash. On Wednesday (Dec. 6) […]\nThe post Bitcoin price surges by 175% amid US ETF hopes appeared first on ReadWrite.",
      url: "https://readwrite.com/bitcoin-sees-price-boost-of-175-in-crypto-market-surge/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/bitcoin-2730220_1280.jpg",
      publishedAt: "2023-12-06T13:49:16Z",
      content:
        "The price of Bitcoin has seen its biggest value boost since the 2022 cryptocurrency market crash.\r\nOn Wednesday (Dec. 6) Bitcoin was trading above $44,000, a far cry away from the $17,000 it was trad… [+2003 chars]",
    },
    {
      source: { id: null, name: "ReadWrite" },
      author: "James Jones",
      title: "Bitcoin price: $400m liquidation leads to significant slump",
      description:
        "Bitcoin experienced an 8% slump on Wednesday (Jan.3) after $400m was liquidated in the space of just two hours. The […]\nThe post Bitcoin price: $400m liquidation leads to significant slump appeared first on ReadWrite.",
      url: "https://readwrite.com/bitcoin-price-400m-liquidation-leads-to-significant-slump/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2024/01/yigit-ali-atasoy-z1jggXh29_Q-unsplash-scaled.jpg",
      publishedAt: "2024-01-03T16:41:52Z",
      content:
        "Bitcoin experienced an 8% slump on Wednesday (Jan.3) after $400m was liquidated in the space of just two hours.\r\nThe fall follows a spike on January 1, as skepticism surrounding the anticipated appro… [+2092 chars]",
    },
    {
      source: { id: null, name: "NPR" },
      author: "David Gura",
      title:
        "After a brutal stretch, a remarkable thing is happening: Cryptocurrencies are surging",
      description:
        "Bitcoin and other digital currencies are rallying, emerging from a stormy period with the conviction that crypto is here to stay.",
      url: "https://www.npr.org/2023/12/26/1220603847/crypto-cryptocurrency-bitcoin-ftx-binance-cz-bankman-fried",
      urlToImage:
        "https://media.npr.org/assets/img/2023/12/25/gettyimages-1402675790_wide-eadf8676b64af620ebb4f8ae76eb29bc059f2598-s1400-c100.jpg",
      publishedAt: "2023-12-26T10:00:50Z",
      content:
        "A bitcoin ATM is seen in Brooklyn, N.Y., on June 13, 2022. Virtual currencies like bitcoin are recovering from a tough period partly on rising hopes that bad actors have been weeded out and that conf… [+6073 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Theron Mohamed",
      title:
        "Morgan Stanley's chairman slams bitcoin as speculative and volatile – and expects the US to dodge a recession",
      description:
        "James Gorman said the rich shouldn't bet big on bitcoin, there wasn't a banking crisis last year, and interest rates are likely to drop this year.",
      url: "https://markets.businessinsider.com/news/currencies/morgan-stanley-gorman-bitcoin-crypto-banking-crisis-recession-rate-cuts-2024-1",
      urlToImage:
        "https://i.insider.com/659689aaec62ab5daf8086dd?width=1200&format=jpeg",
      publishedAt: "2024-01-04T11:28:57Z",
      content:
        "James Gorman is executive chairman of Morgan Stanley.Andrew Burton/Getty Images\r\n<ul>\n<li>Bitcoin is a volatile, speculative asset facing regulatory and industry upheaval, James Gorman says.</li>\n<li… [+2347 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Kiera Fields",
      title:
        "A lawsuit filed against a bitcoin mine in Texas has shed light on a growing trend: US crypto mines backed by millions of dollars from Chinese investors",
      description:
        "A rise in cryptocurrency mining facilities in Texas and other states has come under scrutiny for the industry's ties to Chinese investment.",
      url: "https://www.businessinsider.com/bitcoin-mine-texas-lawsuit-links-to-chinese-investors-2023-12",
      urlToImage:
        "https://i.insider.com/658acb99ec62ab5daf7ea6be?width=1200&format=jpeg",
      publishedAt: "2023-12-26T14:46:23Z",
      content:
        "The influx of Bitcoin facilities in Texas has raised annual power bills across the state.Photo by Mark Felix / AFP) (Photo by MARK FELIX/AFP /AFP via Getty Images\r\n<ul><li>Texas and other US states h… [+3401 chars]",
    },
    {
      source: { id: null, name: "Gizmodo.com" },
      author: "Maxwell Zeff",
      title:
        "Sam Altman’s Weird Eyeball Scanning Crypto Tech Comes to Minecraft",
      description:
        "Worldcoin, Sam Altman’s cryptocurrency venture, is now integrating its verification services into popular apps such as Reddit, Discord, Shopify, Mercado Libre, Telegram, and Minecraft. The move is part of Altman’s World ID 2.0, which describes itself as “a hu…",
      url: "https://gizmodo.com/worldcoin-sam-altman-eye-scan-crypto-minecraft-1851096041",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/7bc02f7461ba489abf2051851f709254.png",
      publishedAt: "2023-12-13T17:45:00Z",
      content:
        "Worldcoin, Sam Altmans cryptocurrency venture, is now integrating its verification services into popular apps such as Reddit, Discord, Shopify, Mercado Libre, Telegram, and Minecraft. The move is par… [+2508 chars]",
    },
    {
      source: { id: null, name: "ReadWrite" },
      author: "Radek Zielinski",
      title: "Coin Cloud bankruptcy leaves customers at risk",
      description:
        "In November 2022, the cybersecurity group vx-underground claimed on social media that unknown hackers had breached the now-defunct Bitcoin ATM […]\nThe post Coin Cloud bankruptcy leaves customers at risk appeared first on ReadWrite.",
      url: "https://readwrite.com/coin-cloud-bankruptcy-leaves-customers-at-risk/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/Coin-Cloud-bankruptcy.jpg",
      publishedAt: "2023-12-12T20:37:48Z",
      content:
        "In November 2022, the cybersecurity group vx-underground claimed on social media that unknown hackers had breached the now-defunct Bitcoin ATM provider Coin Cloud, according to a recent TechCrunch re… [+2170 chars]",
    },
    {
      source: { id: null, name: "heise online" },
      author: "Martin Holland",
      title:
        "Ein Bitcoin erstmals seit April 2022 wieder über 45.000 US-Dollar wert",
      description:
        "Seit dem Herbst geht es für den Bitcoin wieder steil nach oben. Hintergrund ist die Hoffnung auf eine Freigabe es des ersten Bitcoin-ETFs durch die SEC.",
      url: "https://www.heise.de/news/Ein-Bitcoin-erstmals-seit-April-2022-wieder-ueber-45-000-US-Dollar-wert-9584862.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/1/9/4/6/3/shutterstock_1888907947-54ebd2bafa9434e9.jpg",
      publishedAt: "2024-01-02T09:08:00Z",
      content:
        "Zum ersten Mal seit 20 Monaten ist in Bitcoin wieder über 45.000 US-Dollar wert beziehungsweise fast 41.500 Euro. Damit setzt die Kryptowährung ihr im vergangenen Herbst begonnene Rallye weiter fort … [+1831 chars]",
    },
    {
      source: { id: null, name: "Medium" },
      author: "CoinPost Global",
      title: "Bitcoin Is Crucial Climate Tech (BTP Ep. 1 Recap)",
      description:
        "Our first full episode of “Beyond The Price” is out! Entitled “Bitcoin is Crucial Climate Tech”, Bradley speaks with CH4 Capital co-founder and Bitcoin mining researcher Daniel Batten about the…",
      url: "https://medium.com/@coinpost.gb/bitcoin-is-crucial-climate-tech-btp-ep-1-recap-854d3ebbe573",
      urlToImage:
        "https://miro.medium.com/v2/resize:fit:640/0*3WEqMiNG3I0IfnHC.png",
      publishedAt: "2024-01-02T06:44:47Z",
      content:
        "Bitcoin is Crucial Climate Tech (BTP Ep. 1 recap)\r\nOur first full episode of Beyond The Price is out! Entitled Bitcoin is Crucial Climate Tech, Bradley speaks with CH4 Capital co-founder and Bitcoin … [+3177 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "prosen@insider.com (Phil Rosen)",
      title:
        "US stocks rise as Fed official gives investors more rate-cut optimism",
      description:
        "San Francisco Fed President Mary Daly said it's appropriate for the central bank to begin considering rate cuts in 2024.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-finance-investors-rate-cut-fed-2023-12",
      urlToImage:
        "https://i.insider.com/6581abfda79e5746976ade76?width=1200&format=jpeg",
      publishedAt: "2023-12-19T14:44:31Z",
      content:
        "US stocks climbed on Tuesday, following Monday's session that saw the Dow Jones hit a new record high.\r\nSan Francisco Fed President Mary Daly helped fuel the rally, as she told the Wall Street Journa… [+1182 chars]",
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "Daniel Dana",
      title:
        "Is El Salvador's crypto push working? Experts urge caution amid reforms",
      description:
        "President Bukele says that the country is now making a profit on Bitcoin investment amid economic and social reforms in the country.",
      url: "https://abcnews.go.com/International/International/crypto-fans-eye-el-salvador-singapore-amid-sharp/story?id=105366042",
      urlToImage:
        "https://i.abcnewsfe.com/a/e60be918-011e-4258-ab0e-fe5eb957bff6/Salvador-1-gty-er-231207_1701987930117_hpMain_16x9.jpg?w=992",
      publishedAt: "2023-12-13T13:20:51Z",
      content:
        "El Salvador says it's now making a profit on the Bitcoin investments at the center of President Nayib Bukele's economic and social reforms, a surprising turnaround for a country with a decades-long r… [+6234 chars]",
    },
    {
      source: { id: null, name: "MarketWatch" },
      author: "Chris Matthews, Barbara Kollmeyer",
      title:
        "Bitcoin’s price slumps as analysts weigh chances that ‘wild card’ Gensler spikes spot ETF",
      description:
        "Bitcoin and related companies are selling off on Wednesday after a research report predicted the SEC would not approve the spot bitcoin ETF this month.",
      url: "https://www.marketwatch.com/story/bitcoins-price-slumps-as-analysts-weigh-chances-that-wild-card-gensler-spikes-spot-etf-1b13c26f",
      urlToImage: "https://images.mktw.net/im-96310580/social",
      publishedAt: "2024-01-03T18:19:00Z",
      content:
        "Prices of bitcoin and other cryptocurrencies were under pressure Wednesday as investors weighed the chances of a near-term approval of a bitcoin spot exchange-traded fund (ETF), with a decision expec… [+3859 chars]",
    },
    {
      source: { id: null, name: "Themarginalian.org" },
      author: "Maria Popova",
      title:
        "Of Wonder, the Courage of Uncertainty, and How to Hear Your Soul: The Best of The Marginalian 2023",
      description:
        "Hindsight is our finest instrument for discerning the patterns of our lives. To look back on a year of reading, a year of writing, is to discover a secret map of the mind, revealing the landscape of living — after all, how we spend our thoughts is how we spen…",
      url: "https://www.themarginalian.org/2023/12/28/best-of-2023/",
      urlToImage:
        "https://www.themarginalian.org/wp-content/uploads/2023/05/margaretcook_leavesofgrass_attention.jpg?fit=1200%2C630&ssl=1",
      publishedAt: "2023-12-28T18:05:03Z",
      content:
        "This year, I spent thousands of hours and tens of thousands of dollars keeping The Marginalian going. For seventeen years, it has remained free and ad-free and alive thanks to patronage from readers.… [+678 chars]",
    },
    {
      source: { id: "ars-technica", name: "Ars Technica" },
      author: "Kyle Orland",
      title:
        "Reminder: Donate to win swag in our annual Charity Drive sweepstakes",
      description:
        "Add to a charity haul that's already raised over $17,000 in just a few weeks.",
      url: "https://arstechnica.com/gaming/2023/12/reminder-donate-to-win-swag-in-our-annual-charity-drive-sweepstakes-12/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2023/11/charity2023-1-760x380.jpg",
      publishedAt: "2023-12-14T15:56:33Z",
      content:
        "0\r\nIf you've been too busy mourning the death of E3 to take part in this year's Ars Technica Charity Drive sweepstakes, don't worry. You still have time to donate to a good cause and get a chance to … [+1928 chars]",
    },
    {
      source: { id: "ars-technica", name: "Ars Technica" },
      author: "Kyle Orland",
      title:
        "Reminder: Donate to win swag in our annual Charity Drive sweepstakes",
      description:
        "Add to a charity haul that's already raised over $14,000 in less than two weeks.",
      url: "https://arstechnica.com/gaming/2023/12/reminder-donate-to-win-swag-in-our-annual-charity-drive-sweepstakes-11/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2023/11/charity2023-760x380.jpg",
      publishedAt: "2023-12-08T19:41:47Z",
      content:
        "Enlarge/ Just some of the prizes you can win in this year's charity drive sweepstakes.\r\n1\r\nIf you've been too busy playing Against the Storm to take part in this year's Ars Technica Charity Drive swe… [+1984 chars]",
    },
    {
      source: { id: "ars-technica", name: "Ars Technica" },
      author: "Kyle Orland",
      title:
        "Final reminder: Donate to win swag in our annual Charity Drive sweepstakes",
      description:
        "Enter by the end of the day and add to this year's charity haul of over $26,000.",
      url: "https://arstechnica.com/gaming/2024/01/final-reminder-donate-to-win-swag-in-our-annual-charity-drive-sweepstakes-3/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2023/11/charity2023-760x380.jpg",
      publishedAt: "2024-01-02T15:52:21Z",
      content:
        "Enlarge/ Just some of the prizes you can win in this year's charity drive sweepstakes.\r\n0\r\nIf you've been too busy playing the best games of 2023 to take part in this year's Ars Technica Charity Driv… [+2008 chars]",
    },
    {
      source: { id: null, name: "Hipertextual" },
      author: "Ebenizer Pinedo",
      title:
        "Filtrados los nuevos juegos de Insomniac Games: ‘Spider-Man 3’ y ‘Spider-Verse’",
      description:
        "Desafortunadamente, Insominac Games, el estudio detrás de títulos como Ratchet & Clank y Spider-Man, sufrió un hackeo en su red interna. Los atacantes exigieron una suma de 50 Bitcoin con tal de no revelar la información obtenida. Cifra que, desde luego, no f…",
      url: "http://hipertextual.com/2023/12/filtrados-los-nuevos-juegos-de-insomniac-games-spider-man-3-y-spider-verse",
      urlToImage:
        "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/06/spider-man-cruzando-el-multiverso.jpg?fit=2500%2C1406&quality=50&strip=all&ssl=1",
      publishedAt: "2023-12-13T23:01:00Z",
      content:
        "Desafortunadamente, Insominac Games, el estudio detrás de títulos como Ratchet &amp; Clank y Spider-Man, sufrió un hackeo en su red interna. Los atacantes exigieron una suma de 50 Bitcoin con tal de … [+3218 chars]",
    },
    {
      source: { id: null, name: "Hubspot.com" },
      author: "Cyan Zhong",
      title: "7 Expert & Data-Backed Trend Predictions for 2024",
      description:
        "We asked a few badass colleagues and expert Trendsters what they think will be huge in 2024. Here’s what they said.",
      url: "https://blog.hubspot.com/marketing/7-data-backed-trend-predictions-for-2024#article",
      urlToImage:
        "https://blog.hubspot.com/hubfs/Copy%20of%20Featured%20Image%20Template%20Backgrounds-Dec-19-2023-08-34-34-9450-PM.png#keepProtocol",
      publishedAt: "2023-12-20T02:00:00Z",
      content:
        "Its that time of the year\r\nWe asked a few badass colleagues and expert Trendsters what they think will be huge in 2024. Heres what they said:\r\n1. Niche Sports \r\nSara Friedman, Senior Writer of The Hu… [+4629 chars]",
    },
    {
      source: { id: null, name: "heise online" },
      author: "Martin Holland",
      title: "Robinhood: Kryptobörse nun auch in der EU verfügbar",
      description:
        "Vor dem Hintergrund des steigenden Bitcoin-Kurses verspüren auch die Neo-Broker einen Aufwind: Der Pionier Robinhood wagt den Schritt über den großen Teich.",
      url: "https://www.heise.de/news/Robinhood-Kryptoboerse-nun-auch-in-der-EU-verfuegbar-9567543.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/1/0/3/9/6/shutterstock_2060451869-7dbad282f7566a3f.jpg",
      publishedAt: "2023-12-07T16:57:00Z",
      content:
        'Das US-Unternehmen Robinhood bietet seine Kryptogeldbörse "Robinhood Crypto" nun auch in der Europäischen Union an. Das teilte die Fintech-Firma am Donnerstag mit, nur eine Woche nachdem die hauseige… [+2018 chars]',
    },
    {
      source: { id: null, name: "MarketWatch" },
      author: "Frances Yue",
      title:
        "Cathie Wood dumps Grayscale and buys bitcoin-futures ETF. Here’s why.",
      description:
        "One of Cathie Wood’s exchange-traded funds has sold all its holdings of Grayscale Bitcoin Trust over uncertainty around whether the trust's conversion to an ETF would be approved.",
      url: "https://www.marketwatch.com/story/cathie-wood-dumps-grayscale-and-buys-bitcoin-futures-etf-heres-why-1068969b",
      urlToImage: "https://images.mktw.net/im-17572622/social",
      publishedAt: "2023-12-28T17:55:00Z",
      content:
        "One of Cathie Woods exchange-traded funds has sold all its holdings of Grayscale Bitcoin Trust over uncertainty around whether the trusts conversion to an ETF would be approved. Woods ARK Next Genera… [+2247 chars]",
    },
    {
      source: { id: null, name: "MarketWatch" },
      author: "Frances Yue",
      title:
        "Why bitcoin may not see a ‘Santa Claus rally’, despite potential approval of crypto-based ETFs",
      description:
        "A weekly look at the most important moves and news in crypto and what's on the horizon in digital assets.",
      url: "https://www.marketwatch.com/story/why-bitcoin-may-not-see-a-santa-claus-rally-despite-potential-approval-of-crypto-based-etfs-abf046e4",
      urlToImage: "https://images.mktw.net/im-783732/social",
      publishedAt: "2023-12-27T19:24:00Z",
      content:
        "Happy holidays! Welcome back to the last installment of Distributed Ledger of 2023. This is Frances Yue, crypto and markets reporter at MarketWatch.Historically, stocks tend to see a so-called Santa … [+2956 chars]",
    },
    {
      source: { id: null, name: "Boing Boing" },
      author: "Rob Beschizza",
      title:
        "Trailer for Bitconned, a documentary about one of the many scamcoins minted in the mid-late 2010s",
      description:
        'The first line in the trailer for Netflix\'s Bitconned is one of the scammers, free as a bird, saying "Ever since I was a kid, I always wanted to be a criminal." \n\n\n\n\n\r\n\n\r\n\n\n\n\n\nIn 2017, amidst the economic frenzy of the Bitcoin boom, there was no better place …',
      url: "https://boingboing.net/2023/12/06/trailer-for-bitconned-a-documentary-about-one-of-the-many-scamcoins-minted-in-the-mid-late-2010s.html",
      urlToImage:
        "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/12/image-31.png?fit=1200%2C600&ssl=1",
      publishedAt: "2023-12-06T15:05:37Z",
      content:
        "In 2017, amidst the economic frenzy of the Bitcoin boom, there was no better place for scammers than cryptocurrency. So when Ray's friend approached him with the idea of creating a debit card for cry… [+764 chars]",
    },
    {
      source: { id: null, name: "Genbeta.com" },
      author: "Bárbara Bécares",
      title:
        "El Salvador, el primer país en adoptar el Bitcoin, ahora ofrece visados a criptoinversores por un millón de dólares",
      description:
        "El gobierno del El Salvador decidió que este país centroamericano sería el primero del mundo en hacer del bitcoin moneda oficial en el país en verano de 2021. El balance por ahora no es positivo, por muchos motivos, entre otros la caída de la mayor de las cri…",
      url: "https://www.genbeta.com/actualidad/salvador-primer-pais-adoptar-bitcoin-ahora-ofrece-visados-a-criptoinversores-millon-dolares",
      urlToImage:
        "https://i.blogs.es/7cf7a2/esau-fuentes-gonzalez-bqefbdsc4ko-unsplash/840_560.jpeg",
      publishedAt: "2023-12-11T13:31:04Z",
      content:
        "El gobierno del El Salvador decidió que este país centroamericano sería el primero del mundo en hacer del bitcoin moneda oficial en el país en verano de 2021. El balance por ahora no es positivo, por… [+3876 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "George Glover",
      title:
        "From the stunning surge of the 'Magnificent 7' stocks to bitcoin's shock rebound, here are 8 of 2023's wildest markets stories",
      description:
        "Stocks defied Wall Street's gloomy predictions, bonds suffered a historic rout, and the US economy dodged a long-expected recession this year.",
      url: "https://markets.businessinsider.com/news/stocks/craziest-stories-bitcoin-russia-magnificent-seven-recession-bond-market-crash-2023-12",
      urlToImage:
        "https://i.insider.com/640b89ead81e7e0018be07d0?width=1200&format=jpeg",
      publishedAt: "2023-12-28T11:08:26Z",
      content:
        "Silicon Valley Bank's collapse in March was one of the defining markets stories of 2023.Getty Images\r\n<ul>\n<li>It's been another eventful year for markets.</li>\n<li>Stocks defied Wall Street's gloomy… [+7129 chars]",
    },
    {
      source: { id: null, name: "Hubspot.com" },
      author: "Daniel Doan",
      title:
        "Weird Words in English: 100+ Terms You Need to Know from 2023 and Beyond",
      description:
        "In 2023, the Oxford English Dictionary again updated its lexicon, adding 80 new weird words and phrases. \nFrom technological jargon like “Bitcoin” and “Deepfake” to colloquial gems such as “Bestie” and “Binge-Watching,” the OED continues to capture the ever-e…",
      url: "https://blog.hubspot.com/marketing/weirdest-words-added-to-oxford-english-dictionary-2014#article",
      urlToImage:
        "https://blog.hubspot.com/hubfs/weirdest-words-added-to-oxford-english-dictionary-2014_1-1.jpg#keepProtocol",
      publishedAt: "2024-01-03T12:00:00Z",
      content:
        "In 2023, the Oxford English Dictionary again updated its lexicon, adding 80 new weird words and phrases.\r\nFrom technological jargon like Bitcoin and Deepfake to colloquial gems such as Bestie and Bin… [+11399 chars]",
    },
    {
      source: { id: null, name: "MarketWatch" },
      author: "Frances Yue",
      title:
        "How a big, messy ‘cleanup’ in crypto could pave way for a more regulated, mature market in 2024",
      description:
        "Bitcoin rallied over 150% on the year-to-date. A changing of the guards may be partly why.",
      url: "https://www.marketwatch.com/story/how-a-big-messy-cleanup-in-crypto-could-pave-way-for-a-more-regulated-mature-market-in-2024-9e38185e",
      urlToImage: "https://images.mktw.net/im-92646701/social",
      publishedAt: "2023-12-18T12:30:00Z",
      content:
        "After what industry participants are calling a big, messy cleanup of the digital asset industry, crypto bulls are hopeful that the fledgling space will be anchored by more established, regulated play… [+4900 chars]",
    },
    {
      source: { id: null, name: "Golem.de" },
      author: "Andreas Donath",
      title:
        "Warten auf ETF-Entscheidung: Bitcoin steigt über 45.000 US-Dollar",
      description:
        "Der Preis für Bitcoin ist zum ersten Mal seit mehr als acht Monaten wieder auf mehr als 45.000 US-Dollar gestiegen. Bald wird über die Zulassung eines Bitcoin-ETF entschieden. (Bitcoin, Börse)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fwarten-auf-etf-entscheidung-bitcoin-steigt-ueber-45-000-us-dollar-2401-180753.html&referer=https%3A%2F%2Ft.co%2F9027dfe37c",
      urlToImage: null,
      publishedAt: "2024-01-03T06:58:01Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
    },
    {
      source: { id: null, name: "ReadWrite" },
      author: "Paul McNally",
      title:
        "PlayStation game dev hit by major ransomware attack – stolen data being auctioned off",
      description:
        "In the latest high-profile gaming hack, it seems Spiderman 2, and current Wolverine developer Insomniac Games has been breached, by […]\nThe post PlayStation game dev hit by major ransomware attack – stolen data being auctioned off appeared first on ReadWrite.",
      url: "https://readwrite.com/playstation-game-developer-gets-hit-by-major-ransomware-attack-stolen-data-being-auctioned-off/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/06/towfiqu-barbhuiya-em5w9_xj3uU-unsplash.jpg",
      publishedAt: "2023-12-12T16:45:11Z",
      content:
        "In the latest high-profile gaming hack, it seems Spiderman 2, and current Wolverine developer Insomniac Games has been breached, by a group called Rysida, who has published screenshots from Wolverine… [+1787 chars]",
    },
    {
      source: { id: null, name: "heise online" },
      author: "Sylvester Tremmel, Christian Wölbert",
      title:
        "heise+ | Interview: Molly White über die Zukunft der Blockchain-Branche",
      description:
        "Die Bloggerin Molly White dokumentiert die Pleiten und Betrügereien von Blockchain-Firmen. Wir haben sie zur Lage und Entwicklungen in der Branche befragt.",
      url: "https://www.heise.de/hintergrund/Interview-Molly-White-ueber-die-Zukunft-der-Blockchain-Branche-9574922.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/1/4/1/9/2/52475752482_412ec9a1ca_o-56323d397fb76a0a.jpg",
      publishedAt: "2024-01-04T16:30:00Z",
      content:
        "Inhaltsverzeichnis\r\nVor einem Jahr kollabierte die Kryptobörse FTX, vor ein paar Monaten wurde ihr Gründer Sam Bankman-Fried wegen Betrugs verurteilt und nun hat sich auch noch Binance, die größte Kr… [+1355 chars]",
    },
    {
      source: { id: null, name: "Hackaday" },
      author: "Kristina Panos",
      title: "Nyan Keys: Because Your Keyboard is Painfully Slow",
      description:
        "You probably don’t notice keyboard latency when typing or doing mundane tasks, but if you start gaming, that’s also when you might start complaining. Every millisecond counts in that arena. …read more",
      url: "https://hackaday.com/2023/12/10/nyan-keys-because-your-keyboard-is-painfully-slow/",
      urlToImage:
        "https://hackaday.com/wp-content/uploads/2023/12/nyan-keys-800.jpg",
      publishedAt: "2023-12-10T12:00:53Z",
      content:
        "You probably don’t notice keyboard latency when typing or doing mundane tasks, but if you start gaming, that’s also when you might start complaining. Every millisecond counts in that arena. Think you… [+1339 chars]",
    },
    {
      source: { id: null, name: "heise online" },
      author: "Nils Jacobsen",
      title:
        "Ausblick: Was bringt das Tech-Jahr 2024 für Apple, KI, Bitcoin & Co.?​",
      description:
        "Big-Tech-Konzerne gehen nach satten Kurs- und Gewinnsteigerungen 2023 gestärkt ins neue Jahr. 2024 könnte so interessant wie lange nicht mehr werden.​",
      url: "https://www.heise.de/meinung/Ausblick-Was-bringt-das-Tech-Jahr-2024-fuer-Apple-KI-Bitcoin-Co-9583439.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/1/8/7/1/4/shutterstock_1818921524-a01f07a7c31a688a.jpg",
      publishedAt: "2023-12-28T10:45:00Z",
      content:
        "Inhaltsverzeichnis\r\nEs sah aus wie eine Zeitenwende: Vor zwölf Monaten blickte die erfolgsverwöhnte Technologiebranche in den Abgrund zumindest an der Wall Street. Die Aktien der Big-Tech-Konzerne wa… [+2701 chars]",
    },
    {
      source: { id: null, name: "ReadWrite" },
      author: "Brian-Damien Morgan",
      title:
        "Insomniac leak: Rhysida hack sparks rally of support for game developer",
      description:
        "Hacker group Rhysida made good on a promise to leak gaming and personal data related to Insomniac Games. This has […]\nThe post Insomniac leak: Rhysida hack sparks rally of support for game developer appeared first on ReadWrite.",
      url: "https://readwrite.com/insomniac-leak-rhysida-hack-sparks-rally-of-support-for-game-developer/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/12/pexels-soumil-kumar-735911-scaled.jpg",
      publishedAt: "2023-12-19T15:01:51Z",
      content:
        "Hacker group Rhysida made good on a promise to leak gaming and personal data related to Insomniac Games. This has caused a rallying surge of support from game developers in the wake of these personal… [+2491 chars]",
    },
    {
      source: { id: null, name: "Small Business Trends" },
      author: "Joshua Sophy",
      title: "Who Accepts Bitcoin as Payment?",
      description:
        "As the top cryptocurrency, Bitcoin has seen explosive growth, but do you know who accepts Bitcoin as payment? This list is growing daily.",
      url: "https://smallbiztrends.com/2023/12/who-accepts-bitcoin.html",
      urlToImage:
        "https://media.smallbiztrends.com/2021/12/who-accepts-bitcoin.png",
      publishedAt: "2023-12-17T09:15:59Z",
      content:
        "Over the course of its existence, Bitcoin has steadily risen to become the unrivaled frontrunner in the crowded cryptocurrency market place, capturing global attention and reshaping our understanding… [+14577 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Dan DeFrancesco",
      title:
        "The unsealed documents related to Jeffrey Epstein weren't full of bombshells, but some new details emerged",
      description:
        "In today's big story, we're diving into the unsealed court documents naming more than 170 Jeffrey Epstein associates.",
      url: "https://www.businessinsider.com/news-today-january-4-jeffrey-epstein-unsealed-documents-2024-1",
      urlToImage:
        "https://i.insider.com/65969d036979d73718204b17?width=1200&format=jpeg",
      publishedAt: "2024-01-04T14:38:52Z",
      content:
        "American financier Jeffrey Epstein and British socialite Ghislaine Maxwell attend a birthday party for Michael Caine at The Canteen restaurant in Chelsea, London, 17th June 1997.Dave Benett/Getty Ima… [+8083 chars]",
    },
    {
      source: { id: null, name: "heise online" },
      author: "Stefan Krempl",
      title: 'Darknet: Polizei hebt "Kingdom Market" aus',
      description:
        "BKA & Co. haben einen weiteren Darknet-Marktplatz abgeschaltet. Über 42.000 kriminelle Angebote von Drogen bis zu Schadsoftware sind damit nicht mehr verfügbar.",
      url: "https://www.heise.de/news/Darknet-Polizei-hebt-Kingdom-Market-aus-9579808.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/1/6/7/9/8/bka-6ed59eff942f6cc1.jpg",
      publishedAt: "2023-12-20T16:06:00Z",
      content:
        "Das Bundeskriminalamt (BKA) und die Zentralstelle zur Bekämpfung der Internetkriminalität (ZIT) der Generalstaatsanwaltschaft Frankfurt am Main melden einen weiteren Erfolg im Kampf gegen kriminelle … [+2217 chars]",
    },
    {
      source: { id: null, name: "Genbeta.com" },
      author: "Bárbara Bécares",
      title:
        "El impago a contratistas en Texas tira por tierra el anonimato de Bitcoin y destapa una trama millonaria de inversores chinos",
      description:
        "Las criptomonedas suelen ser bastante anónimas, pero si no pagas a tus contratistas puedes poner ese anonimato en peligro. Entre las historias raras de las criptomonedas que casi parecen más ficción que realidad, hoy tenemos la de este estudiante que, por no …",
      url: "https://www.genbeta.com/actualidad/impago-a-contratistas-texas-tira-tierra-anonimato-bitcoin-destapa-trama-millonaria-inversores-chinos",
      urlToImage:
        "https://i.blogs.es/2192ec/ewan-kennedy-mkdbteclpzc-unsplash/840_560.jpeg",
      publishedAt: "2023-12-26T11:35:37Z",
      content:
        "Las criptomonedas suelen ser bastante anónimas, pero si no pagas a tus contratistas puedes poner ese anonimato en peligro. Entre las historias raras de las criptomonedas que casi parecen más ficción … [+4294 chars]",
    },
    {
      source: { id: null, name: "Popular.info" },
      author: "Judd Legum, Tesnim Zekeria, Rebecca Crosby",
      title: "Coinbase targets financially vulnerable young adults",
      description:
        "New advertisements by Coinbase, a cryptocurrency exchange, prey on the financial anxieties of Gen Z and other young adults. The ads, which are on heavy rotation on cable television, depict the modern economic system as rigged. In one of the ads, a young woman…",
      url: "https://popular.info/p/coinbase-targets-financially-vulnerable",
      urlToImage:
        "https://substackcdn.com/image/youtube/w_728,c_limit/a4F9u8Z84YI",
      publishedAt: "2023-12-14T16:38:59Z",
      content:
        "New advertisements by Coinbase, a cryptocurrency exchange, prey on the financial anxieties of Gen Z and other young adults. The ads, which are on heavy rotation on cable television, depict the modern… [+8045 chars]",
    },
    {
      source: { id: null, name: "Presse-citron" },
      author: "Jean-Yves Alric",
      title: "Le Bitcoin est au plus haut : la BCE prédit sa mort prochaine",
      description:
        "Deux fonctionnaires de la Banque centrale européenne affirment que la cryptomonnaie est en fin de course.",
      url: "https://www.presse-citron.net/le-bitcoin-est-au-plus-haut-la-bce-predit-sa-mort-prochaine/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/06/bitcoin-decentralise-anonyme.jpg",
      publishedAt: "2023-12-06T09:30:08Z",
      content:
        "Ce mardi, le cours du Bitcoin a dépassé les 40 000 euros, soit un niveau qui n’avait plus été atteint depuis des mois. Leuphorie est de mise chez les investisseurs et au sein de la communauté crypto,… [+2471 chars]",
    },
    {
      source: { id: null, name: "Slashdot.org" },
      author: "BeauHD",
      title: "CEO of Collapsed Crypto Fund HyperVerse Does Not Appear To Exist",
      description:
        "An anonymous reader quotes a report from The Guardian: A chief executive officer whose claimed qualifications appear to have no basis in fact was used to promote the HyperVerse crypto fund, alongside celebrity messages of support, as part of a push to recruit…",
      url: "https://slashdot.org/story/24/01/03/2218208/ceo-of-collapsed-crypto-fund-hyperverse-does-not-appear-to-exist",
      urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      publishedAt: "2024-01-03T23:50:00Z",
      content:
        "A chief executive officer whose claimed qualifications appear to have no basis in fact was used to promote the HyperVerse crypto fund, alongside celebrity messages of support, as part of a push to re… [+2972 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Theron Mohamed",
      title:
        "'Rich Dad Poor Dad' author warns exploding US debt will fuel inflation and crush the dollar",
      description:
        "Robert Kiyosaki says the American government will print money aggressively to cover its spiraling debt costs, eroding the dollar's value.",
      url: "https://www.businessinsider.com/rich-poor-dad-kiyosaki-debt-inflation-dollar-market-crash-recession-2023-12",
      urlToImage:
        "https://i.insider.com/64b50a55dcdf1100194c22eb?width=1200&format=jpeg",
      publishedAt: "2023-12-07T10:54:06Z",
      content:
        '"Rich Dad Poor Dad" author Robert Kiyosaki.The Rich Dad Channel/YouTube\r\n<ul>\n<li>Robert Kiyosaki warned America\'s debt pile will fuel inflation and crush the US dollar.</li>\n<li>The government will … [+2813 chars]',
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Katherine Tangalakis-Lippert,Lloyd Lee",
      title:
        "Former Amazon engineer pleads guilty to stealing $12.3 million of crypto in first ever hacking case involving smart contracts",
      description:
        "A former Amazon engineer pleaded guilty to hacking two crypto exchanges and stealing $12.3 million in the first ever conviction involving smart contracts.",
      url: "https://www.businessinsider.com/amazon-engineer-hacking-cryptocurrency-nirvana-solana-what-are-smart-contracts-2023-12",
      urlToImage:
        "https://i.insider.com/657e49ed50edbc52a865111a?width=1200&format=jpeg",
      publishedAt: "2023-12-17T04:53:16Z",
      content:
        "Representation of Bitcoin is seen with binary code displayed on a laptop screenNurPhoto/Getty Images\r\n<ul><li>An ex-Amazon engineer pleaded guilty this week to hacking two cryptocurrency exchanges.</… [+3918 chars]",
    },
    {
      source: { id: "die-zeit", name: "Die Zeit" },
      author: "ZEIT ONLINE: News -",
      title:
        "Digitalwährung : Bitcoin erstmals seit April 2022 über 45.000 US-Dollar",
      description:
        "Hier finden Sie Informationen zu dem Thema „Digitalwährung “. Lesen Sie jetzt „Bitcoin erstmals seit April 2022 über 45.000 US-Dollar“.",
      url: "https://www.zeit.de/news/2024-01/02/bitcoin-erstmals-seit-april-2022-ueber-45-000-us-dollar",
      urlToImage:
        "https://img.zeit.de/news/2024-01/02/bitcoin-erstmals-seit-april-2022-ueber-45-000-us-dollar-image-group/wide__1300x731",
      publishedAt: "2024-01-02T07:13:04Z",
      content:
        "Die Digitalwährung Bitcoin ist am Dienstag erstmals seit April 2022 über die Marke von 45.000 US-Dollar gestiegen. Zuletzt kostete ein Bitcoin auf der Handelsplattform Bitstamp 45.200 Dollar (41.000 … [+2076 chars]",
    },
    {
      source: { id: null, name: "heise online" },
      author: "Frank Schräer",
      title:
        "Freitag: Hyperloop-Hype wohl zu Ende, Lapsus$-Täter in Psychiatrie statt in Haft",
      description:
        "Hyperloop One liquidiert + Lapsus$-Täter verurteilt + Deregulierung in Argentinien pro Krypto + Leistungsbegrenzungen erklärt + Geständnis eines iPhone-Gauners",
      url: "https://www.heise.de/news/Freitag-Hyperloop-Hype-wohl-zu-Ende-Lapsus-Taeter-in-Psychiatrie-statt-Haft-9581055.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/1/7/4/6/5/friday-8811913955340084.webp",
      publishedAt: "2023-12-22T05:30:00Z",
      content:
        "Hyperloop One wollte Hochgeschwindigkeitstransportsysteme in Vakuumtunneln entwickeln, aber mehr als Testfahrten wurden nicht geschafft. Jetzt ist Schluss, das Unternehmen wird derzeit aufgelöst. Off… [+4356 chars]",
    },
    {
      source: { id: "die-zeit", name: "Die Zeit" },
      author: "ZEIT ONLINE: Geldanlage - Eric Voigt",
      title:
        "Kryptowährung: Bitcoin verliert innerhalb eines Tages mehr als neun Prozent an Wert",
      description:
        "Der Kurs der Digitalwährung fiel um fast 5.000 US-Dollar. Kurz zuvor war der Bitcoin noch so viel wert wie zuletzt 2022. Auch andere Kryptowährungen sind betroffen.",
      url: "https://www.zeit.de/wirtschaft/geldanlage/2024-01/bitcoin-kryptowaehrung-geldanlage",
      urlToImage:
        "https://img.zeit.de/wirtschaft/geldanlage/2024-01/bitcoin-kryptowaehrung-geldanlage-bild/wide__1300x731",
      publishedAt: "2024-01-03T14:23:45Z",
      content:
        "Die Kryptowährung Bitcoin hat nach deutlichen Gewinnen in den Vortagen innerhalb eines Tages kräftig an Wert verloren. Innerhalb kurzer Zeit fiel der Kurs von 46.000 US-Dollar um mehr als neun Prozen… [+713 chars]",
    },
    {
      source: { id: "die-zeit", name: "Die Zeit" },
      author: "ZEIT ONLINE: News -",
      title:
        "Digitalwährung: Bitcoin verliert deutlich: Jüngste Gewinne sind weg",
      description:
        "Hier finden Sie Informationen zu dem Thema „Digitalwährung“. Lesen Sie jetzt „Bitcoin verliert deutlich: Jüngste Gewinne sind weg“.",
      url: "https://www.zeit.de/news/2024-01/03/bitcoin-verliert-deutlich-juengste-gewinne-sind-weg",
      urlToImage:
        "https://img.zeit.de/news/2024-01/03/bitcoin-verliert-deutlich-juengste-gewinne-sind-weg-image-group/wide__1300x731",
      publishedAt: "2024-01-03T13:38:37Z",
      content:
        "Der Kurs der Digitalwährung Bitcoin ist am Mittwoch kräftig gefallen und hat deutliche Gewinne vom Vortag wieder abgegeben. In kurzer Zeit sackte der Kurs im Mittagshandel von etwa 46.000 Dollar um m… [+709 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title: "Bitcoin rally: Is El Salvador's Bitcoin bet paying off?",
      description:
        "President Bukele is celebrating as his $120m Bitcoin reserve is finally in the black - but economists are not.",
      url: "https://www.bbc.co.uk/news/technology-67637245",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/3B14/production/_121742151_hi072113665.jpg",
      publishedAt: "2023-12-06T14:01:36Z",
      content:
        "El Salvador's president is celebrating after a Bitcoin reserve he bought with public money has entered the black amid the continuing Bitcoin price rise.\r\nSince 2021, Nayib Bukele has spent more than … [+6443 chars]",
    },
    {
      source: { id: null, name: "heise online" },
      author: "Nils Jacobsen",
      title:
        "heise+ | Geldanlage: Mit Aktien, ETFs und ETPs in Kryptowährungen investieren",
      description:
        "Wer in Kryptowährungen investieren möchte, muss keine Coins kaufen und mit Wallets hantieren. Möglich machen das zahlreiche Wertpapiere wie ETFs und ETNs.",
      url: "https://www.heise.de/ratgeber/Geldanlage-Mit-Aktien-ETFs-und-ETPs-in-Kryptowaehrungen-investieren-9566780.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/0/9/9/6/7/202312_Kryptofond-9a5df8e7b08e12d1.png",
      publishedAt: "2023-12-14T06:30:00Z",
      content:
        "Inhaltsverzeichnis\r\nBitcoin und Kryptowährungen wohl kein anderes Thema aus der Schnittmenge zwischen Technik und Finanzen eignet sich so gut für abendfüllende Diskussionen. Für die einen ist es spek… [+2537 chars]",
    },
    {
      source: { id: null, name: "Hipertextual" },
      author: "Gabriel Erard",
      title: "Insomniac Games por fin rompe el silencio tras su brutal hackeo",
      description:
        "Después del hackeo y la masiva filtración de datos que sufrió días atrás, Insomniac Games por fin rompió el silencio. El estudio perteneciente a PlayStation publicó un comunicado en su cuenta de X (Twitter), refiriéndose al incidente y a las consecuencias del…",
      url: "http://hipertextual.com/2023/12/insomniac-games-rompe-silencio-hackeo",
      urlToImage:
        "https://imgs.hipertextual.com/wp-content/uploads/2021/09/wolverine-scaled.jpeg",
      publishedAt: "2023-12-22T17:23:11Z",
      content:
        "Después del hackeo y la masiva filtración de datos que sufrió días atrás, Insomniac Games por fin rompió el silencio. El estudio perteneciente a PlayStation publicó un comunicado en su cuenta de X (T… [+3568 chars]",
    },
    {
      source: { id: null, name: "MarketWatch" },
      author: "Cam Hui",
      title:
        "‘My sunny outlook doesn’t come without some risks.’ How stock investors and traders can weather 2024",
      description: "Short-term, the Santa Claus rally looks solid.",
      url: "https://www.marketwatch.com/story/my-sunny-outlook-doesnt-come-without-some-risks-how-stock-investors-and-traders-can-weather-2024-88c02692",
      urlToImage: "https://images.mktw.net/im-247479/social",
      publishedAt: "2023-12-27T22:32:00Z",
      content:
        "The U.S. stock markets year-end rally looks intact. Lately I have been focused on equity hedge-fund performance and the necessity of hedge-fund managers to preserve and enhance returns ahead of their… [+3798 chars]",
    },
    {
      source: { id: null, name: "Marginalrevolution.com" },
      author: "Tyler Cowen",
      title: "The resurgence of crypto",
      description:
        "Crypto and bitcoin, among their other uses, are Rorschach tests for commentators. As these institutions evolve, are you capable of changing your mind and updating in response to new data? Sadly, many people are failing that test and instead staking out inflex…",
      url: "https://marginalrevolution.com/marginalrevolution/2023/12/the-resurgence-of-crypto.html",
      urlToImage:
        "https://marginalrevolution.com/wp-content/uploads/2016/10/MR-logo-thumbnail.png",
      publishedAt: "2023-12-09T06:06:49Z",
      content:
        "Crypto and bitcoin, among their other uses, are Rorschach tests for commentators. As these institutions evolve, are you capable of changing your mind and updating in response to new data? Sadly, many… [+4367 chars]",
    },
    {
      source: { id: null, name: "Presse-citron" },
      author: "RPB",
      title:
        "Le Bitcoin et les crypto sont-ils en train de renouer avec les sommets ?",
      description:
        "Depuis lundi le Bitcoin et les autres crypto reprennent de la vigueur - avec notamment le BTC autour des 40 000 euros. Pourquoi cette situation et surtout est-ce durable ?",
      url: "https://www.presse-citron.net/le-bitcoin-et-les-crypto-sont-ils-en-train-de-renouer-avec-les-sommets/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/06/bitcoin-decentralise-anonyme.jpg",
      publishedAt: "2023-12-05T19:24:14Z",
      content:
        "Lundi 4 décembre 2023, plusieurs sites se faisaient écho de la remontée fulgurante du Bitcoin depuis quelques jours. La crypto a atteint la barre des 40 000 dollars hier, avant de dépasser la barre d… [+2758 chars]",
    },
    {
      source: { id: null, name: "Techmeme.com" },
      author: null,
      title:
        "Coinbase rolls out spot crypto trading on its international exchange as part of a global expansion, letting investors trade bitcoin and ether against USDC (Bloomberg)",
      description:
        "Bloomberg:\nCoinbase rolls out spot crypto trading on its international exchange as part of a global expansion, letting investors trade bitcoin and ether against USDC  —  - Hazy regulatory outlook deters some investors from US venues … Institutional investors …",
      url: "https://www.techmeme.com/231213/p28",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iy29z4GLm5yo/v1/1200x801.jpg",
      publishedAt: "2023-12-13T15:30:13Z",
      content:
        "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 10:35 AM ET, December 13, 2023.\r\nThe most current version of the site as always is available at our home page.\r\nTo… [+72 chars]",
    },
    {
      source: { id: null, name: "Hipertextual" },
      author: "Gabriel Erard",
      title:
        "Insomniac Games habría sido hackeado: amenazan con filtrar detalles de ‘Wolverine’ y datos de los empleados",
      description:
        "Un nuevo ciberataque pone en jaque a Sony. Esta vez, la víctima sería Insomniac Games, el estudio detrás de la exitosa franquicia Spider-Man de PlayStation. El grupo de ransomware Rhysida afirma haber hackeado la compañía y robado información del nuevo juego …",
      url: "http://hipertextual.com/2023/12/insomniac-games-hackeo-filtracion-wolverine",
      urlToImage:
        "https://imgs.hipertextual.com/wp-content/uploads/2021/09/wolverine-scaled.jpeg",
      publishedAt: "2023-12-12T17:45:28Z",
      content:
        "Un nuevo ciberataque pone en jaque a Sony. Esta vez, la víctima sería Insomniac Games, el estudio detrás de la exitosa franquicia Spider-Man de PlayStation. El grupo de ransomware Rhysida afirma habe… [+3237 chars]",
    },
    {
      source: { id: "die-zeit", name: "Die Zeit" },
      author: "ZEIT ONLINE: Wirtschaft - Thomas Fischermann",
      title: 'Kryptowährungen: "Das sind rationale Leute"',
      description:
        "Der durchschnittliche Kryptoanleger ist männlich, weiß, westlich – und freute sich zuletzt über eine Rallye. Der Wirtschaftssoziologe Koray Caliskan erklärt den Hype.",
      url: "https://www.zeit.de/2024/02/kryptowaehrungen-bitcoin-kurs-blockchain-investition",
      urlToImage:
        "https://img.zeit.de/2024/02/kryptowaehrungen-bitcoin-kurs-teaser/wide__1300x731",
      publishedAt: "2024-01-03T13:32:59Z",
      content:
        "DIE ZEIT: Monatelang waren Bitcoin, Kryptowährungen und Blockchains kein großes Thema in der öffentlichen Debatte und plötzlich ist zum Jahreswechsel das Spekulationsfieber wieder ausgebrochen. Der B… [+429 chars]",
    },
    {
      source: { id: null, name: "Muyinteresante.es" },
      author: "Juan Diego Polo",
      title: "Criptomonedas: qué son, para qué sirven y alternativas a Bitcoin",
      description:
        "Durante los últimos años las criptomonedas se han convertido en un tema de conversación fundamental en el mundo de la tecnología y las finanzas. Exploramos qué son, cómo funcionan y qué otras alternativas existen a Bitcoin.",
      url: "https://www.muyinteresante.es/actualidad/38114.html",
      urlToImage:
        "https://imagenes.muyinteresante.es/files/article_social_75/uploads/2023/12/27/658bf6d247046.jpeg",
      publishedAt: "2023-12-27T10:08:56Z",
      content:
        "Las criptomonedas han llegado a representar un cambio de paradigma en la forma en que entendemos el dinero y las transacciones. A diferencia de las monedas fiduciarias emitidas por los gobiernos, las… [+9505 chars]",
    },
    {
      source: { id: null, name: "CNET" },
      author: "飯塚　直",
      title: "仮想通貨（暗号資産）取引所の利用経験は約1割--MD研究所が調査",
      description:
        "MMDLaboは12月25日、同社が運営するMMD研究所において、「2023年仮想通貨（暗号資産）に関する調査」を公表。知っている仮想通貨（暗号資産）取引所サービスがある人は29.1％、利用経験は10.8％などとしている。",
      url: "https://japan.cnet.com/article/35213285/",
      urlToImage:
        "https://japan.cnet.com/storage/2023/12/27/84aac4e73d1404096b692b2f90c95f88/2297.jpg",
      publishedAt: "2023-12-29T22:00:00Z",
      content:
        "MMDLabo1225MMD2023\r\n20693160011241129\r\nn=200bitFlyern=200Coincheckn=200GMOn=200n=200DMM Bitcoinn=200SBI VC n=200n=200\r\n206930,00029.170.9\r\n10.8\r\n20n=2,56221.430n=2,74220.640n=3,47116.5\r\n3,24027.5bitF… [+156 chars]",
    },
    {
      source: { id: null, name: "01net.com" },
      author: "Hadrien Augusto",
      title:
        "Le Bitcoin monte en flèche ce mardi parce que 2024 rime avec un grand changement",
      description:
        "Les investisseurs parient sur l’approbation des ETF Bitcoin Spot dont celui de BlackRock, le principal gestionnaire d’actifs de la planète. L’année 2024 serait alors marquée d’un tournant pour la première crypto-monnaie, peut-être aussi fort que l’arrivée de …",
      url: "https://www.01net.com/actualites/le-bitcoin-monte-en-fleche-ce-mardi-parce-que-2024-rime-avec-un-grand-changement.html",
      urlToImage:
        "https://www.01net.com/app/uploads/2024/01/bitcoin-etf-spot.jpg",
      publishedAt: "2024-01-02T10:42:03Z",
      content:
        "Les investisseurs parient sur lapprobation des ETF Bitcoin Spot dont celui de BlackRock, le principal gestionnaire dactifs de la planète. Lannée 2024 serait alors marquée dun tournant pour la premièr… [+3148 chars]",
    },
    {
      source: { id: null, name: "Cracked.com" },
      author: "Eli Yudin",
      title: "6 Business Deals So Bad They Make Bitcoin Seem Like A Sure Thing",
      description:
        "Straight into the moon, where I’ll be left in pieces among the wreckage of the craft!",
      url: "https://www.cracked.com/article_40689_6-business-deals-so-bad-they-make-bitcoin-seem-like-a-sure-thing.html",
      urlToImage:
        "https://s3.crackedcdn.com/phpimages/article/0/3/3/1002033.jpg",
      publishedAt: "2024-01-04T13:00:00Z",
      content:
        "Even the worlds shrewdest negotiators occasionally have a bad day. You may have done everything right. You saw an asset trading at its peak, and you rightly bought high. Better yet, the asset in ques… [+6992 chars]",
    },
    {
      source: { id: null, name: "Small Business Trends" },
      author: "Samson Haileyesus",
      title: "8 Best Cryptocurrency Wallet Options for Secure Transactions",
      description:
        "Whether you choose a hard or soft wallet, here are some of the best cryptocurrency wallet options available to safely store your currency.",
      url: "https://smallbiztrends.com/2023/12/best-cryptocurrency-wallet.html",
      urlToImage:
        "https://media.smallbiztrends.com/2023/11/best-cryptocurrency-wallet-trezor-suite-lite-1-e1699637471473.png",
      publishedAt: "2023-12-26T18:44:34Z",
      content:
        "Cryptocurrencies are rapidly changing the way we do business online. These digital currencies are driving significant changes in the trading of digital assets, physical products, and services. One of… [+18221 chars]",
    },
    {
      source: { id: null, name: "MarketWatch" },
      author: "Tomi Kilgore",
      title: "Cathie Wood’s ETFs are now buying Tesla’s stock",
      description:
        "The ARK Innovation ETF was previously a seller of Tesla stock, which is one of its largest holdings.",
      url: "https://www.marketwatch.com/story/cathie-woods-etfs-are-now-buying-teslas-stock-6cef00a3",
      urlToImage: "https://images.mktw.net/im-17572622/social",
      publishedAt: "2023-12-21T12:51:00Z",
      content:
        "Cathie Woods ARK Innovation ETF is now buying Tesla Inc. stock, a reversal from its previous moves to trim its large stake in the electric-vehicle giant.The high-profile investors flagship ETF \r\n ARK… [+1802 chars]",
    },
    {
      source: { id: null, name: "Xataka.com" },
      author: "Matías S. Zavia",
      title:
        "Se retrasa la primera misión comercial de Estados Unidos a la Luna",
      description:
        "United Launch Alliance (ULA) necesita un poco más de tiempo para lanzar la primera misión lunar de Estados Unidos en más de 50 años. El lanzamiento marcará también el debut del cohete Vulcan Centaur, que utiliza motores de metano de Blue Origin (la empresa ae…",
      url: "https://www.xataka.com/espacio/se-retrasa-primera-mision-comercial-estados-unidos-a-luna",
      urlToImage: "https://i.blogs.es/8e6759/cohete/840_560.jpeg",
      publishedAt: "2023-12-15T13:18:47Z",
      content:
        "United Launch Alliance (ULA) necesita un poco más de tiempo para lanzar la primera misión lunar de Estados Unidos en más de 50 años. El lanzamiento marcará también el debut del cohete Vulcan Centaur,… [+2906 chars]",
    },
    {
      source: { id: null, name: "Small Business Trends" },
      author: "Samson Haileyesus",
      title: "8 Best Cryptocurrency App Choices for Investors and Businesses",
      description:
        "There are thousands of cryptocurrencies, with the best cryptocurrency app choices, you can better manage your sales and purchases securely.",
      url: "https://smallbiztrends.com/2023/12/best-cryptocurrency-app.html",
      urlToImage:
        "https://media.smallbiztrends.com/2023/11/best-cryptocurrency-app-1.png",
      publishedAt: "2023-12-26T18:38:29Z",
      content:
        "Cryptocurrencies such as Bitcoin and Ethereum have revolutionized our approach to money. You can use these digital currencies for a wide range of purchases from small items like coffee to big-ticket … [+13920 chars]",
    },
    {
      source: { id: "die-zeit", name: "Die Zeit" },
      author: "ZEIT ONLINE: Entdecken - Michael Allmaier",
      title: "Erpressung mit schlechten Bewertungen: Wie es wirklich ist",
      description:
        "Vor sieben Jahren hat er sein Restaurant eröffnet, nun steht dessen Ruf auf dem Spiel. Wie es wirklich ist, mit schlechten Bewertungen erpresst zu werden.",
      url: "https://www.zeit.de/2024/01/erpressung-bewertung-restaurant-internetkriminalitaet",
      urlToImage:
        "https://img.zeit.de/2024/01/erpressung-bewertung-restaurant-internetkriminalitaet-teaserbild/wide__1300x731",
      publishedAt: "2024-01-02T12:53:57Z",
      content:
        'Es war ein Donnerstagmorgen, ich war gerade in der Stadt unterwegs, als ich diese Mail in meinem Postfach fand. "Das Ende von Restaurant Heimatjuwel" stand im Betreff. Die Absender schrieben, sie sei… [+385 chars]',
    },
    {
      source: { id: null, name: "Quartz India" },
      author: "Ananya Bhattacharya",
      title:
        "Banking adversaries Elizabeth Warren and Jamie Dimon have found common ground on crypto",
      description:
        "JPMorgan Chase CEO Jamie Dimon and US senator Elizabeth Warren have sparred over financial regulation for more than a decade. But in a rare occurrence during a Senate Banking Committee hearing yesterday (Dec. 6), they adopted the same stance. Both want to see…",
      url: "https://qz.com/banking-adversaries-elizabeth-warren-and-jamie-dimon-ha-1851079753",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/5e84c4b3b634fac8dc674b03000f54a0.jpg",
      publishedAt: "2023-12-07T14:27:36Z",
      content:
        "JPMorgan Chase CEO Jamie Dimon and US senator Elizabeth Warren have sparred over financial regulation for more than a decade. But in a rare occurrence during a Senate Banking Committee hearing yester… [+3003 chars]",
    },
    {
      source: { id: null, name: "AppleInsider" },
      author: "news@appleinsider.com (William Gallagher)",
      title:
        "Apple's April 2023 in review: Honoring Steve Jobs, opening up India, and learning to save",
      description:
        "April 2023 was about looking back to the work of Steve Jobs, of Jony Ive, and of Ted Lasso, plus pressing ahead into India and the future of iMessage outside of Apple's platform.From the front cover of the new Steve Jobs bookWhere March 2023 had the mid-cycle…",
      url: "https://appleinsider.com/articles/23/12/27/apples-april-2023-in-review-honoring-steve-jobs-opening-up-india-and-learning-to-save",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/56714-117195-000-lead-April-Steve-Jobs-xl.jpg",
      publishedAt: "2023-12-27T18:30:18Z",
      content:
        "From the front cover of the new Steve Jobs book\r\nApril 2023 was about looking back to the work of Steve Jobs, of Jony Ive, and of Ted Lasso, plus pressing ahead into India and the future of iMessage … [+7000 chars]",
    },
    {
      source: { id: null, name: "Hackaday" },
      author: "Kristina Panos",
      title: "Keebin’ with Kristina: the One With All the LEGO",
      description:
        "It seems like mechanical keyboard enthusiasts are more spoiled for choice with each passing day. But as broad as the open source pool has become, there’s still no perfect keyboard for everyon…",
      url: "https://hackaday.com/2023/12/20/keebin-with-kristina-the-one-with-all-the-lego/",
      urlToImage: "https://hackaday.com/wp-content/uploads/2021/07/Keebin.jpg",
      publishedAt: "2023-12-20T18:00:54Z",
      content:
        "It seems like mechanical keyboard enthusiasts are more spoiled for choice with each passing day. But as broad as the open source pool has become, there’s still no perfect keyboard for everyone. So, a… [+5187 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Tom Carter",
      title: "The crypto bros are coming for AI",
      description:
        "It has been a bad year for crypto, with prices crashing and key figures like Sam Bankman-Fried going to jail. Experts say crypto influencers and startups have responded by pivoting hard toward AI.",
      url: "https://www.businessinsider.com/the-crypto-bros-are-coming-for-ai-2023-12",
      urlToImage:
        "https://i.insider.com/6583116acefc010bea258d17?width=1200&format=jpeg",
      publishedAt: "2023-12-23T10:00:01Z",
      content:
        "FTX founder Sam Bankman-Fried was found guilty of seven counts of fraud and conspiracy last month. Michael M Santiago/Getty Images\r\n<ul><li>It has been a bad year for crypto, with prices crashing and… [+6852 chars]",
    },
    {
      source: { id: null, name: "Presse-citron" },
      author: "Robin Sabbadini",
      title:
        "Une start-up nantaise lance un étonnant radiateur/ordinateur permettant de faire des économies",
      description:
        "Une jeune start-up nantaise lance un projet inédit, un ordinateur sous forme de radiateur qui utilise la chaleur fatale !",
      url: "https://www.presse-citron.net/une-start-up-nantaise-lance-un-etonnant-radiateur-ordinateur-permettant-de-faire-des-economies/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2023/12/Sans-titre-2.jpg",
      publishedAt: "2023-12-19T11:30:09Z",
      content:
        "Lhiver et ses baisses de température se font ressentir en ce moment, ainsi, tous les moyens sont bons pour essayer de réduire sa facture délectricité en trouvant des moyens inédits de réaliser des éc… [+2497 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "nobsbitcoin.com",
      title: "Bitcoin Connect: Connect Bitcoin Wallets with Apps",
      description:
        'No Bullshit Bitcoin is funded by our community. "Bitcoin Connect leverages two existing components and makes them available in a plug and play experience for app developers and wallet users." "First, WebLN, a set of specifications implemented by dozens of app…',
      url: "https://biztoc.com/x/b5d4fe9383e44821",
      urlToImage: "https://c.biztoc.com/p/b5d4fe9383e44821/s.webp",
      publishedAt: "2023-12-23T02:44:15Z",
      content:
        'No Bullshit Bitcoin is funded by our community."Bitcoin Connect leverages two existing components and makes them available in a plug and play experience for app developers and wallet users.""First, W… [+330 chars]',
    },
    {
      source: { id: null, name: "Forbes" },
      author:
        "Clem Chambers, Senior Contributor, \n Clem Chambers, Senior Contributor\n https://www.forbes.com/sites/investor/people/clem/",
      title:
        "Riding The Bitcoin Parabola: 5 Strategies To Protect Your Profits",
      description:
        "The bitcoin ﻿chart is incredible. It appears on the way of yet another bitcoin parabola.",
      url: "https://www.forbes.com/sites/digital-assets/2023/12/11/riding-the-bitcoin-parabola-5-strategies-to-protect-your-profits/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/6576e945360250be7869e822/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2023-12-11T17:04:18Z",
      content:
        "There are several ways to play bitcoin's parabola.\r\ngetty\r\nThe bitcoin BTC\r\n chart is incredible. It appears on the way of yet another bitcoin parabola.\r\nI have been writing forever about the cycle a… [+4497 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "fdemott@insider.com (Filip De Mott)",
      title:
        "Jamie Dimon says he's deeply opposed to crypto and the government should 'close it down'",
      description:
        '"I\'ve always been deeply opposed to crypto, bitcoin, et cetera," Jamie Dimon said during a Congressional hearing.',
      url: "https://markets.businessinsider.com/news/currencies/jamie-dimon-crypto-bitcoin-regulation-sec-etf-criminal-laundering-banking-2023-12",
      urlToImage:
        "https://i.insider.com/6570bbe40ec98e92f74cc7f8?width=1200&format=jpeg",
      publishedAt: "2023-12-06T19:27:56Z",
      content:
        "Cryptocurrencies may be on a hot streak, but the head of America's biggest bank still isn't buying the hype. \r\nJamie Dimon, in a hearing before the Senate Banking Committee on Wednesday, reiterated h… [+2186 chars]",
    },
    {
      source: { id: null, name: "Forbes" },
      author:
        "Susie Violet Ward, Contributor, \n Susie Violet Ward, Contributor\n https://www.forbes.com/sites/susievioletward/",
      title: "BlackRock's Revamped Spot Bitcoin ETF Model",
      description:
        "BlackRock has revised its spot bitcoin exchange-traded fund, altering how Wall Street banks engage with bitcoin.",
      url: "https://www.forbes.com/sites/digital-assets/2023/12/13/blackrocks-revamped-spot-bitcoin-etf-model/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/6579641da689983d9812b961/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2023-12-13T08:03:36Z",
      content:
        "Photo by Michael M. Santiago\r\nGetty Images\r\nBlackRock has revised its spot bitcoin exchange-traded fund, altering how Wall Street banks engage with bitcoin. The model, presented to the U.S. Securitie… [+2497 chars]",
    },
    {
      source: { id: null, name: "Techmeme.com" },
      author: null,
      title:
        "Filing: MicroStrategy acquired 14,620 BTC for $616M in cash, taking its total holdings to 189,150 BTC, worth $8B+, or almost 1% of the 19.58M BTC outstanding (David Pan/Bloomberg)",
      description:
        "David Pan / Bloomberg:\nFiling: MicroStrategy acquired 14,620 BTC for $616M in cash, taking its total holdings to 189,150 BTC, worth $8B+, or almost 1% of the 19.58M BTC outstanding  —  - MicroStrategy's total Bitcoin holdings is now 189,150 coins … The Tysons…",
      url: "https://www.techmeme.com/231227/p15",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i0PIxup.sVfg/v1/1200x799.jpg",
      publishedAt: "2023-12-27T15:05:02Z",
      content:
        "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 10:05 AM ET, December 27, 2023.\r\nThe most current version of the site as always is available at our home page.\r\nTo… [+72 chars]",
    },
    {
      source: { id: null, name: "Forbes" },
      author:
        "Maria Gracia Santillana Linares, Forbes Staff, \n Maria Gracia Santillana Linares, Forbes Staff\n https://www.forbes.com/sites/mariagraciasantillanalinares/",
      title: "Bitcoin Shakes The Blues",
      description:
        "Expected surge of demand from ETF investors powers the original crypto to a 154% gain as 2023 draws to the close.",
      url: "https://www.forbes.com/sites/digital-assets/2023/12/30/bitcoin-shakes-the-blues/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/658331c1e90c8ced6b168c00/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2023-12-30T16:15:30Z",
      content:
        "Bitcoin neared $45,000 this year for a year-end increase of 154%. A sharp contrast from 2022's decline in price, institutional adoption and monetary policy pushed the coin's price up. (Photo illustra… [+4083 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "stacker.news",
      title: "Bitcoin calendar for your fridge \\ stacker news ~bitcoin",
      description:
        "A while ago I made this printable calendar of the major holidays in the Bitcoin year, but I'm not quite happy with the days I have listed. I'm aiming for something that is postcard size so you can mail it or stick it on a corkboard in your office or under a m…",
      url: "https://biztoc.com/x/890f9e03b6727fbe",
      urlToImage: "https://c.biztoc.com/259/og.png",
      publishedAt: "2023-12-13T14:41:45Z",
      content:
        "A while ago I made this printable calendar of the major holidays in the Bitcoin year, but I'm not quite happy with the days I have listed. I'm aiming for something that is postcard size so you can ma… [+171 chars]",
    },
    {
      source: { id: null, name: "Gizmodo.com" },
      author: "Maxwell Zeff",
      title: "Espera, ¿Bitcoin va a morir?",
      description:
        "El precio de bitcóin casi se estrelló 10% el miércoles, cayendo de $ 45,000 a menos de $ 41,000 en solo unas horas, perjudicando la mejor corrida alcista de las criptomonedas en un año. Pero, ¿qué o quién podría ¿Ha sido el culpable de la crisis? El día anter…",
      url: "https://es.gizmodo.com/bitcoin-va-a-morir-1851141047",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/9588ceb29e82f2f60c9e88ce20c92393.jpg",
      publishedAt: "2024-01-04T19:35:00Z",
      content:
        "El precio de bitcóin casi se estrelló 10% el miércoles, cayendo de $ 45,000 a menos de $ 41,000 en solo unas horas, perjudicando la mejor corrida alcista de las criptomonedas en un año. Pero, ¿qué o … [+2923 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "cryptobriefing.com",
      title: "Bitcoin community clashes over censorship and privacy tools",
      description:
        "A new debate surged yesterday when Bitcoin core developer Luke Dashjr and the official Twitter account of Samourai Wallet, a non-custodial Bitcoin wallet, engaged in a heated discussion accusing OCEAN, a decentralized Bitcoin mining pool, of wanting to censor…",
      url: "https://biztoc.com/x/4f4803862aa574f7",
      urlToImage: "https://c.biztoc.com/p/4f4803862aa574f7/s.webp",
      publishedAt: "2023-12-08T00:54:12Z",
      content:
        "A new debate surged yesterday when Bitcoin core developer Luke Dashjr and the official Twitter account of Samourai Wallet, a non-custodial Bitcoin wallet, engaged in a heated discussion accusing OCEA… [+311 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "coingape.com",
      title: "Miners Minted $4 Billion In Fees In Just Last 30 Days",
      description:
        "Bitcoin miners have been having a gala time as the Bitcoin price roars past $45,000 registering over 20% gains since the beginning of December 2023. As a result, the Bitcoin miners have scooped massive amounts in miner fees over the last month. Bitcoin Miners…",
      url: "https://biztoc.com/x/17e9315295a7a872",
      urlToImage: "https://c.biztoc.com/p/17e9315295a7a872/s.webp",
      publishedAt: "2024-01-03T04:58:16Z",
      content:
        "Bitcoin miners have been having a gala time as the Bitcoin price roars past $45,000 registering over 20% gains since the beginning of December 2023. As a result, the Bitcoin miners have scooped massi… [+312 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "bitcoinmagazine.com",
      title: "Bitcoin Fluctuates Amidst Increasing Institutional Acceptance",
      description:
        "The below is an excerpt from a recent edition of Bitcoin Magazine Pro, Bitcoin Magazine's premium markets newsletter. To be among the first to receive these insights and other on-chain bitcoin market analysis straight to your inbox, subscribe now. Bitcoin has…",
      url: "https://biztoc.com/x/613ccdba52d3615c",
      urlToImage: "https://c.biztoc.com/p/613ccdba52d3615c/s.webp",
      publishedAt: "2023-12-13T18:10:45Z",
      content:
        "The below is an excerpt from a recent edition of Bitcoin Magazine Pro, Bitcoin Magazine's premium markets newsletter. To be among the first to receive these insights and other on-chain bitcoin market… [+297 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "stacker.news",
      title: "When to sell/spend some bitcoin? \\ stacker news ~bitcoin",
      description:
        "I see this conversation a lot, and have increasingly been asked it ..this is the way I think about it: Over the 15y price history of Bitcoin, 4 years after buying on any day has resulted in a minimum fiat price increase of 113%. Now, if that continued forward…",
      url: "https://biztoc.com/x/fa7264ff2c8e5f2a",
      urlToImage: "https://c.biztoc.com/p/fa7264ff2c8e5f2a/s.webp",
      publishedAt: "2023-12-06T21:22:22Z",
      content:
        "I see this conversation a lot, and have increasingly been asked it ..this is the way I think about it: Over the 15y price history of Bitcoin, 4 years after buying on any day has resulted in a minimum… [+224 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "stacker.news",
      title:
        "Incentivizing bitcoin in my small business \\ stacker news ~bitcoin",
      description:
        "As @DarthCoin suggests, I have adopted a 10% discount system for bitcoin payments in my small business. IMG_20231207_112448.jpg I was already using this system but only a few regular customers were aware of it, now that I have also put up a sign I hope that n…",
      url: "https://biztoc.com/x/922e659fe3f2f214",
      urlToImage: "https://c.biztoc.com/p/922e659fe3f2f214/s.webp",
      publishedAt: "2023-12-07T11:24:17Z",
      content:
        "As @DarthCoin suggests, I have adopted a 10% discount system for bitcoin payments in my small business. IMG_20231207_112448.jpg I was already using this system but only a few regular customers were a… [+226 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "nobsbitcoin.com",
      title:
        "Bitcoin Design Foundation: Funding For Open-Source Bitcoin Design Work",
      description:
        "No Bullshit Bitcoin is funded by our community. \"The foundation's primary focus is to support motivated individuals with grants that empower them to contribute to open source Bitcoin design, user research, and related areas. Additionally, the foundation will …",
      url: "https://biztoc.com/x/7e98ab25d3f72ce4",
      urlToImage: "https://c.biztoc.com/p/7e98ab25d3f72ce4/s.webp",
      publishedAt: "2023-12-17T00:20:11Z",
      content:
        "No Bullshit Bitcoin is funded by our community.\"The foundation's primary focus is to support motivated individuals with grants that empower them to contribute to open source Bitcoin design, user rese… [+328 chars]",
    },
    {
      source: { id: null, name: "Forbes" },
      author:
        "Javier Bastardo, Contributor, \n Javier Bastardo, Contributor\n https://www.forbes.com/sites/javierbastardo/",
      title: "El Salvador Invites Bitcoin Millionaires To Rebuild The Country",
      description:
        "This initiative is part of the Bitcoin strategy the government of Nayib Bukele has been following since declaring bitcoin legal tender in 2021.",
      url: "https://www.forbes.com/sites/digital-assets/2023/12/11/el-salvador-invites-bitcoin-millionaires-to-rebuild-the-country/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/6577a7f135eb167e288862ee/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2023-12-12T00:30:07Z",
      content:
        "President Nayib Bukele, El Salvador\r\nPrensa Presidencial El Salvador\r\nEl Salvador unveiled its Freedom Visa program, aiming to receive $1 billion through donations, targeting one thousand high-net-wo… [+3099 chars]",
    },
    {
      source: { id: null, name: "Forbes" },
      author:
        "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
      title:
        "‘Big News’—Forget The Spot Bitcoin ETF, A Huge Unexpected Bank Flip Could Be About To Hit The Price Of Bitcoin, Ethereum, XRP, Solana And Crypto",
      description:
        "The bitcoin price has come within touching distance of $45,000 per bitcoin in recent weeks—boosting other major cryptocurrencies such as ethereum, XRP﻿XRP﻿ and solana...",
      url: "https://www.forbes.com/sites/digital-assets/2023/12/23/big-news-forget-the-spot-bitcoin-etf-a-huge-unexpected-bank-flip-could-be-about-to-hit-the-price-of-bitcoin-ethereum-xrp-solana-and-crypto/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/60585d3d60d1b3bd4a7ca8ff/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2023-12-23T12:45:04Z",
      content:
        "BitcoinBTC\r\n and crypto prices have soared this year, pushed higher by expectations of major changes in 2024.\r\nSubscribenow to Forbes' CryptoAsset &amp; Blockchain Advisor and \"uncover blockchain blo… [+2982 chars]",
    },
    {
      source: { id: null, name: "Forbes" },
      author:
        "Susie Violet Ward, Contributor, \n Susie Violet Ward, Contributor\n https://www.forbes.com/sites/susievioletward/",
      title:
        "Bitwise Reveals Bitcoin ETF Advert Signaling Mainstream Transition",
      description:
        "Bitwise debuts a groundbreaking ad for its spot bitcoin ETF, featuring Jonathan Goldsmith and signaling a major shift in mainstream finance acceptance of bitcoin.",
      url: "https://www.forbes.com/sites/digital-assets/2023/12/19/bitwise-reveals-bitcoin-etf-advert-signaling-mainstream-transition/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/6581897e0c89f71ed00d30b8/0x0.jpg?format=jpg&crop=1006,566,x0,y21,safe&height=900&width=1600&fit=bounds",
      publishedAt: "2023-12-19T12:19:23Z",
      content:
        "Photo by Harmony Gerber\r\nGetty Images\r\nBitwise Asset Management recently unveiled its first commercial for a spot bitcoin Exchange-Traded Fund. This comes at a time when the U.S. regulatory approval … [+2747 chars]",
    },
    {
      source: { id: null, name: "Forbes" },
      author:
        "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
      title:
        "BlackRock Reveals Major Bitcoin ETF Update As Huge $1.6 Trillion Crypto Price Pump Spurs Ethereum, BNB, XRP And Solana",
      description:
        "The bitcoin price has added 40% over the last six months alone, pushed on by a flood of bitcoin spot exchange-traded fund (ETF) applications...",
      url: "https://www.forbes.com/sites/digital-assets/2023/12/19/blackrock-reveals-major-bitcoin-etf-update-as-huge-16-trillion-crypto-price-pump-spurs-ethereum-bnb-xrp-and-solana/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/651ea23d7782501917072f5a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2023-12-19T12:47:35Z",
      content:
        'BitcoinBTC\r\n and major cryptocurrenciesincluding ethereum, BNBBNB\r\n, XRPXRP\r\n and solanahave rocketed higher amid expectations of a 2024 "Biden bailout."\r\nSubscribenow to Forbes\' CryptoAsset &amp; Bl… [+3218 chars]',
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "fdemott@insider.com (Filip De Mott)",
      title:
        "BlackRock's proposed bitcoin ETF will now allow cash redemptions after pushback from the SEC",
      description:
        "The compromise from BlackRock comes amid hopes that SEC approval of the ETF is imminent.",
      url: "https://markets.businessinsider.com/news/currencies/blackrock-bitcoin-spot-etf-sec-regulation-cash-redemptions-crypto-currency-2023-12",
      urlToImage:
        "https://i.insider.com/6581bae7cefc010bea24e676?width=1200&format=jpeg",
      publishedAt: "2023-12-19T17:00:04Z",
      content:
        "BlackRock updated its proposed bitcoin spot ETF to allow cash redemptions, bringing the fund more in line with regulatory demands.\r\nAccording to an amended S-1 filing on Monday, the world's largest a… [+1506 chars]",
    },
    {
      source: { id: null, name: "Clubic" },
      author: "Samir Rahmoune",
      title:
        "Rétrospective : 2023, le Bitcoin et les cryptomonnaies rebondissent très fort",
      description:
        "2023 a été l'inverse de l'année précédente pour les cryptomonnaies, avec une forte hausse des cours et un retour de la mode des monnaies numériques.",
      url: "https://www.clubic.com/actualite-513832-retrospective-2023-le-bitcoin-et-les-cryptomonnaies-rebondissent-tres-fort.html",
      urlToImage: "https://pic.clubic.com/v1/images/1909745/raw",
      publishedAt: "2023-12-31T14:33:00Z",
      content:
        "Malgré ces différents scandales, tout semble aller pour le mieux durant ce mois de décembre 2023 pour les cryptomonnaies. La locomotive, le Bitcoin, a ainsi dépassé tranquillement un nouveau seuil, à… [+1336 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "coinpedia.org",
      title: "Max Keiser Warns of Hidden Dangers in Upcoming Bitcoin ETFs",
      description:
        "The post Max Keiser Warns of Hidden Dangers in Upcoming Bitcoin ETFs appeared first on Coinpedia Fintech News Prominent Bitcoin advocate and financial analyst Max Keiser has raised significant concerns about the upcoming Bitcoin spot Exchange-Traded Funds (ET…",
      url: "https://biztoc.com/x/a266f5038f35f711",
      urlToImage: "https://c.biztoc.com/p/a266f5038f35f711/s.webp",
      publishedAt: "2023-12-21T11:08:13Z",
      content:
        "The post Max Keiser Warns of Hidden Dangers in Upcoming Bitcoin ETFs appeared first on Coinpedia Fintech NewsProminent Bitcoin advocate and financial analyst Max Keiser has raised significant concern… [+312 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "cryptodaily.co.uk",
      title:
        "Bitcoin soars higher as crypto pushes above $1.6 trillion market cap",
      description:
        "Bitcoin and cryptocurrencies just aren’t stopping. Bitcoin has steamrollered through $41,000, leaving most altcoins in its wake. Bitcoin is truth With most of the world’s economies still wallowing in possible recession, or not far from one, bitcoin is leading…",
      url: "https://biztoc.com/x/35d3cb04d451e45b",
      urlToImage: "https://c.biztoc.com/p/35d3cb04d451e45b/s.webp",
      publishedAt: "2023-12-05T22:35:27Z",
      content:
        "Bitcoin and cryptocurrencies just arent stopping. Bitcoin has steamrollered through $41,000, leaving most altcoins in its wake.Bitcoin is truthWith most of the worlds economies still wallowing in pos… [+213 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "coingape.com",
      title:
        "Option Traders Betting on Bitcoin (BTC) Price at $50,000, Key Levels to Watch",
      description:
        "Amid Bitcoin’s recent price rally to $44,000, Bitcoin option traders have turned bullish expecting the Bitcoin price to touch $50,000 by the end of January 2024. The traders have pinned their hopes on the approval of the spot Bitcoin ETF likely in the first t…",
      url: "https://biztoc.com/x/ddc4715e58e3e436",
      urlToImage: "https://c.biztoc.com/p/ddc4715e58e3e436/s.webp",
      publishedAt: "2023-12-07T04:52:10Z",
      content:
        "Amid Bitcoins recent price rally to $44,000, Bitcoin option traders have turned bullish expecting the Bitcoin price to touch $50,000 by the end of January 2024. The traders have pinned their hopes on… [+286 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "coinpedia.org",
      title:
        "Valkyrie Files Registration of Securities With SEC For Bitcoin ETF",
      description:
        "The post Valkyrie Files Registration of Securities With SEC For Bitcoin ETF appeared first on Coinpedia Fintech News The race for the spot Bitcoin ETF is at its peak, as Valkyrie has filed a registration with the US Securities and Exchange Commission (SEC) fo…",
      url: "https://biztoc.com/x/01c9eae4e1788732",
      urlToImage: "https://c.biztoc.com/p/01c9eae4e1788732/s.webp",
      publishedAt: "2024-01-04T18:41:02Z",
      content:
        "The post Valkyrie Files Registration of Securities With SEC For Bitcoin ETF appeared first on Coinpedia Fintech NewsThe race for the spot Bitcoin ETF is at its peak, as Valkyrie has filed a registrat… [+270 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "cryptodaily.co.uk",
      title: "Bitcoin dominates the crypto market",
      description:
        "All paths lead to the 0.618 fibonacci • Bitcoin dominance sucks value out of altcoins As bitcoin manages to break through the $40,000 level and push on to $42,000, the altcoins are put on hold as the king of the cryptocurrencies dominates the scene. When bitc…",
      url: "https://biztoc.com/x/482be4814417e4a0",
      urlToImage: "https://c.biztoc.com/p/482be4814417e4a0/s.webp",
      publishedAt: "2023-12-05T22:35:37Z",
      content:
        "All paths lead to the 0.618 fibonacciBitcoin dominance sucks value out of altcoinsAs bitcoin manages to break through the $40,000 level and push on to $42,000, the altcoins are put on hold as the kin… [+226 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "bitcoinist.com",
      title:
        "Bitcoin HODLing: A Third Of The Supply Now Unmoved Since 5+ Years",
      description:
        "On-chain data shows about a third of the total circulating Bitcoin supply hasn’t seen any movement on the blockchain since over five years ago. Bitcoin Supply Grows More Dormant As HODLing Continues In a new post on X, analyst James V. Straten shared a chart …",
      url: "https://biztoc.com/x/5c6d049179b04ba0",
      urlToImage: "https://c.biztoc.com/p/5c6d049179b04ba0/s.webp",
      publishedAt: "2023-12-08T18:06:14Z",
      content:
        "On-chain data shows about a third of the total circulating Bitcoin supply hasnt seen any movement on the blockchain since over five years ago.Bitcoin Supply Grows More Dormant As HODLing ContinuesIn … [+241 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "cryptonews.com",
      title:
        "Sam Altman-Affiliated Meanwhile Group Introduces Bitcoin Private Credit Fund",
      description:
        "Source: AdobeStock / jirsak Bitcoin life insurance innovator Meanwhile Group, backed by notable figures like Sam Altman and Gradient Ventures, has unveiled a new private credit fund denominated in Bitcoin. The closed fund aims to provide investors with a “con…",
      url: "https://biztoc.com/x/d6043ae46da44eee",
      urlToImage: "https://c.biztoc.com/p/d6043ae46da44eee/s.webp",
      publishedAt: "2023-12-08T12:52:09Z",
      content:
        "Source: AdobeStock / jirsakBitcoin life insurance innovator Meanwhile Group, backed by notable figures like Sam Altman and Gradient Ventures, has unveiled a new private credit fund denominated in Bit… [+316 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "bitcoinmagazine.com",
      title:
        "VanEck Releases New Bitcoin Commercial, Ahead of Potential Spot Bitcoin ETF Approval",
      description:
        "VanEck, a prominent investment management firm, has unveiled a interesting new Bitcoin commercial, stirring excitement and speculation within the Bitcoin community. The release comes amidst mounting anticipation surrounding the possible approval of Spot Bitco…",
      url: "https://biztoc.com/x/3cae0e3c293da78e",
      urlToImage: "https://c.biztoc.com/p/3cae0e3c293da78e/s.webp",
      publishedAt: "2023-12-29T15:11:13Z",
      content:
        "VanEck, a prominent investment management firm, has unveiled a interesting new Bitcoin commercial, stirring excitement and speculation within the Bitcoin community. The release comes amidst mounting … [+261 chars]",
    },
    {
      source: { id: null, name: "Biztoc.com" },
      author: "newsbtc.com",
      title: "Sleeping Bitcoin Giants Wake Up: Pattern Mirrors 2021 Bull Run",
      description:
        "On-chain data shows the dormant Bitcoin whales have been becoming active again recently in a fashion that’s reminiscent of the 2021 bull run. Bitcoin Whales Dormant Since 10+ Years Ago Are Waking Up In a new CryptoQuant Quicktake post, analyst Maartunn has ta…",
      url: "https://biztoc.com/x/eb13331d6e31b9c1",
      urlToImage: "https://c.biztoc.com/p/eb13331d6e31b9c1/s.webp",
      publishedAt: "2023-12-06T00:12:09Z",
      content:
        "On-chain data shows the dormant Bitcoin whales have been becoming active again recently in a fashion thats reminiscent of the 2021 bull run.Bitcoin Whales Dormant Since 10+ Years Ago Are Waking UpIn … [+274 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-5">
        <h2>NewsMonkey - Top Headlines</h2>

        {/* This is a news component. */}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 40)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;

function updateBeerList() {
    let container = document.getElementById("beer-list");
    container.innerHTML = "";
    
    let style = selectedStyle()
    let strRange = strengthRange()

    for(let i = 0; i <beers.length; ++i) {
        let beer = beers[i]
        if (style && beer.filterStyle != style) {
          continue;
        }
        if (strRange) {
          if (beer.pct < strRange[0] || beer.pct > strRange[1]) {
            continue;
          }
        }
        container.insertAdjacentHTML("beforeend", makeBeerElement(beer))
    }
}

function makeBeerElement(beer) {
    let notes = beer.notes.map((x) => `<span class="button small">${x}</span>`).join("\n")

    return `
    <section>
        <a href="${beer.link}" class="image">
            <img src="images/beer/${beer.img}" alt="" data-position="top center" />
        </a>
        <div class="content">
            <div class="inner">
                <header class="major">
                    <h3>${beer.name} ${beer.pct}%</h3>
                    <h4>${beer.style}</h4>
                </header>
                <p>
                ${notes}
                <br/><br/>
                ${beer.desc}
                </p>
            </div>
        </div>
    </section>`
}

function selectedStyle() {
  let elem = document.getElementById('style-select')
  if (!elem) { return null }
  return elem.value
}

function strengthRange() {
  let elem = document.getElementById('strength-select')
  if (!elem) { return null }
  if (elem.value === "Low") {
    return [0, 4]
  } else if (elem.value === "Normal") {
    return [4.1, 6]
  } else if (elem.value === "High") {
    return [6.1, 20]
  }
}

let beers = [
    {
      "link": "https://untappd.com/b/hop-nation-brewing-co-the-heart/2114779",
      "img": "hop-nation-the-heart.jpeg",
      "name": "Hop nation the heart",
      "pct": 4.6,
      "style": "Pale Ale - American",
      "filterStyle": "Pale Ale",
      "notes": ["Hoppy", "Light", "Floral", "Citrus", "Dry"],
      "desc": "The Heart Pale Ale is a product of passion. Its golden colour and citrus hop aromas invite you in for a well-crafted and flavourful experience."
    },
    {
      "link": "https://untappd.com/b/little-creatures-brewing-furphy/759496",
      "img": "little-creatures-furphy.jpeg",
      "name": "Little Creatures Furphy",
      "pct": 4.4,
      "style": "Kölsch",
      "filterStyle": "Lager",
      "notes": ["Light", "Clean", "Smooth", "Fruity", "Malty"],
      "desc": "Refreshing Ale, the beer that started it all. Brewed with 100% Victorian hops and Malt."
    },
    {
      "link": "https://untappd.com/b/mountain-goat-beer-very-enjoyable-beer/2852079",
      "img": "mountain-goat-very-enjoyable-beer.jpeg",
      "name": "Mountain goat very enjoyable beer",
      "pct": 4.2,
      "style": "Lager - Pale",
      "filterStyle": "Lager",
      "notes": ["Crisp", "Refreshing", "Hoppy", "Citrusy", "Tropical"],
      "desc": "This is not your average beer! Mountain Goat Very Enjoyable Beer Cans are craft beers with no added gimmicks or nonsense. The beers are crafted without complexity and will deliver a Very Enjoyable experience."
    },
    {
      "link": "https://untappd.com/b/modus-brewing-modus-xpa/3590531",
      "img": "modus-xpa.png",
      "name": "Modus Operandi XPA",
      "pct": 4.2,
      "style": "Pale Ale - XPA",
      "filterStyle": "XPA",
      "notes": ["Light", "Refreshing", "Bright", "Hoppy", "Sweet"],
      "desc": "Extra pale, and extra fresh. Crisp tropical notes with an easy drinking refreshing finish"
    },
    {
      "link": "https://untappd.com/b/mountain-goat-beer-aussie-wheat-beer/4828871",
      "img": "mountain-goat-wheat-ale.png",
      "name": "Mountain Goat Aussie Wheat Beer",
      "pct": 4.2,
      "style": "Wheat Beer - Other",
      "filterStyle": "Belgian",
      "notes": ["Wheat", "Thin", "Citrusy", "Clean", "Grassy"],
      "desc": "Made with locally-grown wheat, this beer isn’t just a riff on a classic; this is Aussie Wheat Beer.  In the can you'll find a slightly hazy brew, with notes of mandarin and pear and a crisp finish that's immensely refreshing."
    },
    {
      "link": "https://untappd.com/b/atomic-hazy/4196605",
      "img": "atomic-hazy.png",
      "name": "Atomic Hazy",
      "pct": 4.5,
      "style": "Pale ale - New England / Hazy",
      "filterStyle": "Pale Ale",
      "notes": ["Hazy", "Tropical", "Juicy", "Sessionable", "Light"],
      "desc": "Easy drinking beer with a fruity hop finish."
    },
    {
      "link": "https://untappd.com/b/zeffer-carrot-cake-ginger-beer/4660873",
      "img": "zeffer-carrot-cake-ginger-beer.png",
      "name": "Zeffer Carrot Cake Ginger Beer",
      "pct": 4.0,
      "style": "Cider - Herbed / Spiced / Hopped",
      "filterStyle": "Ginger Beer",
      "notes": ["Ginger", "Spicy", "Cake", "Carrot", "Caramel"],
      "desc": ""
    },
    {
      "link": "https://untappd.com/b/great-northern-brewing-co-super-crisp-lager/230949",
      "img": "great-northern-super-crisp.png",
      "name": "Great Northern Super Crisp Lager",
      "pct": 3.5,
      "style": "Lager - American",
      "filterStyle": "Lager",
      "notes": ["Light", "Clean", "Smooth", "Sweet"],
      "desc": ""
    },
    {
      "link": "https://untappd.com/b/vilkmerges-alus-vilkmerges-vysniu-kriek/1017657",
      "img": "vilkmerges-kriek.jpeg",
      "name": "Vilkmerges Vyšnių Kriek",
      "pct": 5.0,
      "style": "Fruit Beer",
      "filterStyle": "Sour",
      "notes": ["Cherry", "Sweet", "Fruity", "Dark", "Sour"],
      "desc": "Vilkmerges brewmasters, following the traditions of XVIII century brewing, released the first Lithuanian Kriek type ale – deep cherry colour, aroma and sweet and sour taste. Matured beer becomes light, subtle Lithuanian Cherry Kriek with berries‘ scent.<br/>This ale is perfect with chocolate and its deserts, cheesecake. It complements Panna cotta and fresh cheese, like mascarpone and others "
    },
    {
      "link": "https://untappd.com/b/kaiju-beer-kaiju-krush/1843438",
      "img": "kaiju-krush.png",
      "name": "Kaiju Krush!",
      "pct": 4.7,
      "style": "Pale Ale - American",
      "filterStyle": "Pale Ale",
      "notes": ["Tropical", "Fruity", "Hoppy", "Light", "Sweet"],
      "desc": ""
    },
    {
      "link": "https://untappd.com/b/balter-brewing-company-balter-x-green-cheek-california-ipa/5364295",
      "img": "balter-green-creek-california-ipa.png",
      "name": "Balter & Green Cheek California IPA",
      "pct": 7.0,
      "style": "IPA - American",
      "filterStyle": "IPA",
      "notes": ["Crisp", "Resinous", "Balanced", "Citrus", "Sweetness"],
      "desc": "Brewed at Balter HQ with our great mates Green Cheek Beer Co from Orange County California this stripped down IPA is like an F1 car (or Toyota Yaris) with just two gears-whoa dude and farrrrr out mannn- but throws up an astounding array of hop aromas and flavours from just two mighty hops. <br/>Packed to the billy-o with our fabled ‘21 Citra and  ‘22 Cryo Mosaic, this jammin’ California IPA has ’em all... pineapple, lime jelly, bursts of mango and papaya, fizzy orange sherbet, violets, pink candy floss, blueberries and a little weed. <br/>The lean and clean base of pale malt and rolled wheat straps you in to let those hop flavours belt you into next week. <br/>With aerodynamic bittering and a crispy dry finish  this scarily drinkable seven percenter will lap you in no time."
    },
    {
      "link": "https://untappd.com/b/dainton-beer-jungle-juice/3576518",
      "img": "dainton-jungle-juice.png",
      "name": "Dainton Jungle Juice",
      "pct": 6.5,
      "style": "IPA - New England / Hazy",
      "filterStyle": "IPA",
      "notes": ["Fruity", "Hoppy", "Bitter", "Resinous", "Piney"],
      "desc": "Welcome to the jungle, baby! Big, thick and packed with dank, tropical juice flavours, this is one jungle you are going to want to get lost in."
    },
    {
      "link": "https://untappd.com/b/hope-brewery-ipa-india-pale-ale/836998",
      "img": "hope-IPA.png",
      "name": "Hope IPA",
      "pct": 6.0,
      "style": "IPA - American",
      "filterStyle": "IPA",
      "notes": ["Hoppy", "Piney", "Fruity", "Bitter", "Malty"],
      "desc": "An assertive American style IPA with big flavours of citrus, pine and tropical fruit. The five different malts provide a solid base to balance the big hop flavours of Ella, Galaxy, Citra and Mosaic; a tasty, satisfying bitter beer."
    },
    {
      "link": "https://untappd.com/b/mismatch-brewing-company-dark/4823656",
      "img": "mismatch-dark.png",
      "name": "Mismatch Dark",
      "pct": 5.5,
      "style": "Dark Ale",
      "filterStyle": "Dark Beer",
      "notes": ["Malty", "Dark", "Biscuity", "Caramelly", "Thin"],
      "desc": "When the winter months roll in and the temperature drops, people drop their IPA's and Pale Ale's and look for something malty and warming and until now we haven't given those people a core beer for the occasion, until now.<br/>A dark beer which is lighter and less roasty than a stout, but maltier and more full than a porter. A combination of several dark malts will bring a combination of coffee, chocolate, caramel, and dark fruit while Munich and Maris Otter malts give the beer a toasty/biscuity layer. Finished in the brewhouse with a light dose of Centennial hops adds subtly earthy and floral aromas"
    },
    {
      "link": "https://untappd.com/b/4-pines-brewing-company-pale-ale/16407",
      "img": "4pines-pale-ale.png",
      "name": "4 Pines Pale Ale",
      "pct": 5.1,
      "style": "Pale Ale - American",
      "filterStyle": "Pale Ale",
      "notes": ["Hoppy", "Fruity", "Malty", "Light", "Smooth"],
      "desc": "A colorful deep Ruby Amber appearance. Aromas of Pine and Grapefruit overlay a malt background. On the palate full bodied malty flavours with a tight and bitter finish."
    },
    {
      "link": "https://untappd.com/b/bentspoke-brewing-co-sprocket/756469",
      "img": "bentspoke-sprocket.png",
      "name": "Bentspoke Sprocket",
      "pct": 7.0,
      "style": "IPA - American",
      "filterStyle": "IPA",
      "notes": ["Hoppy", "Fruity", "Tropical", "Strong"],
      "desc": "A big and hoppy summer IPA with raw tropical fruit sniffs and tastes. Hops: Mosaic, Amarillo, Fortnight"
    },
    {
      "link": "https://untappd.com/b/bierbrouwerij-de-koningshoeven-la-trappe-quadrupel/1830",
      "img": "la-trappe-quadrupel.png",
      "name": "La Trappe Quadrupel",
      "pct": 10.0,
      "style": "Belgian Quadrupel",
      "filterStyle": "Belgian",
      "notes": ["Strong", "Sweet", "Smooth", "Banana", "Malty"],
      "desc": "A characteristically Trappist ale with a warm amber colour and a cream-coloured head. The aroma is associated with clover and nuts, balanced by the sweet aromas of vanilla, raisins and banana. La Trappe Quadrupel is the heaviest of all the La Trappe Trappist ales and it is also the source for the name of this style. A full, heart-warming and intense taste. Malty with sweet tones of dates and caramel. The aftertaste is smooth and slightly bitter"
    },
    {
      "link": "https://untappd.com/b/hawke-s-brewing-co-hawke-s-patio-pale/2684941",
      "img": "hawkes-patio-pale.png",
      "name": "Hawkes Patio Pale",
      "pct": 4.5,
      "style": "Pale Ale - American",
      "filterStyle": "Pale Ale",
      "notes": ["Light", "Clean", "Citrusy", "Hoppy", "Malty"],
      "desc": "An easy-drinking pale, delivering a big, floral aroma, with tropical notes of lychee, stone fruit and citrus. Lightly toasted malt and gentle bitterness deliver a clean finish.<br/><br/>Hops: Chinook, Ekuanot & Mosaic"
    },
    {
      "link": "https://untappd.com/b/bracket-brewing-long-game/5552291",
      "img": "bracket-long-game.webp",
      "name": "Bracket Long Game",
      "pct": 6.6,
      "style": "Bock - Hell / Maibock / Lentebock",
      "filterStyle": "Dark Beer",
      "notes": ["Malty", "Toasty", "Bread", "Clean", "Dry"],
      "desc": "Long Game has been brewed with all continental European malts. Malt driven but still crisp. A favourite here at the brewery"
    },
    {
      "link": "https://untappd.com/b/bracket-brewing-gregarious-green/5697106",
      "img": "bracket-gregarious-green.webp",
      "name": "Bracket Gregarious Green",
      "pct": 8.3,
      "style": "IPA - Imperial / Double New England / Haz",
      "filterStyle": "IPA",
      "notes": ["Heavy", "Sweet", "Dry", "Thick", "Citrus"],
      "desc": "In typical fashion, we roped our good mates at Shapeshifter into another kiwi heavy DIPA, this time brewed up here. Pulling a few techniques we haven't used before from Shapeshifters repertoire combined with some of our tried and tested we've landed ourselves a cracking citrus forward DIPA"
    },
    {
      "link": "https://untappd.com/b/bracket-brewing-squigglin/5697751",
      "img": "bracket-squigglin.webp",
      "name": "Bracket Squigglin",
      "pct": 6.8,
      "style": "IPA - New England / Hazy",
      "filterStyle": "IPA",
      "notes": ["Sweet", "Mouthfeel", "Stone Fruit", "Citrusy", "Fruity"],
      "desc": "Squigglin' is our first beer made at Bracket featuring NZ Hops Superdelic and what a cracking hop! It's hard to put our finger on exactly what it tastes like, but it plays extremely well with the Mosaic and Motueka we paired it with. To the benefit of the beer, we went a bit heavy handed on the hops forgetting it was sub 7% IPA<br/> <br/>\"If I had to pick a couple of tasting notes, I'd probably say candied tropical fruit and bright citrus\" - Mike"
    },
    {
      "link": "https://untappd.com/b/brouwerij-bosteels-tripel-karmeliet/6511",
      "img": "tripel-kareliet.png",
      "name": "Tripel Karmeliet",
      "pct": 8.4,
      "style": "Belgian Tripel",
      "filterStyle": "Belgian",
      "notes": ["Smooth", "Sweet", "Strong", "Fruity", "Light bodied"],
      "desc": "Tripel Karmeliet is still brewed to an authentic beer recipe from 1679 originating in the former Carmelite monastery in Dendermonde. Written over 300 years ago, this recipe describes the use of three kinds of grain: wheat, oats and barley.<br/><br/>The name Tripel karmeliet thus refers both to its origin and its in-bottle refermentation. From many trial brews of multigrain tripels carried out at our brewery in the 90s, it appears that the particular historic combination of the 3 kinds of grain still remains the ideal blend."
    },
    {
      "link": "https://untappd.com/b/squinters-brewing-co-spaghetti-arms/5619960",
      "img": "squinters-spaghetti-arms.jpg",
      "name": "Squinters Spaghetti Arms",
      "pct": 5.0,
      "style": "Pale Ale - Hazy",
      "filterStyle": "Pale Ale",
      "notes": ["Hazy", "Fruity", "Light"],
      "desc": ""
    },
    {
      "link": "https://untappd.com/b/wayward-brewing-everyday-ale/2884141",
      "img": "wayward-everyday-ale.jpeg",
      "name": "Wayward Everyday Ale",
      "pct": 4.2,
      "style": "Pale Ale - Australian",
      "filterStyle": "Pale Ale",
      "notes": ["Citrusy", "Piney", "Tropical", "Fruity", "Bitter"],
      "desc": "This super sessionable Aussie Pale Ale is a beer for enjoying everywhere, anytime. The crisp, light malt profile is complemented by aromatic tropical fruit and citrus notes courtesy of Australian Galaxy and American Cascade hops."
    },
    {
      "link": "https://untappd.com/b/pinnacle-drinks-nam-nam-alley/4983641",
      "img": "nam-nam-alley.png",
      "name": "Nam Nam Alley",
      "pct": 4.5,
      "style": "Lager - Amber / Red",
      "filterStyle": "Lager",
      "notes": ["Light Bodied", "Dry", "Malty", "Sweet", "Metallic"],
      "desc": "Nam means south in ancient Chinese and Viet means descendants of dragons souring to the sun. However you look at it, it’s an appropriate name for a Vietnamese beer. When we crave a cold refreshing beer in the humidity and heat of the blazing sun, we want it to go ‘nam nam’ or down the hatch. Crack a can of this delicious Vietnamese brew from Quang Ngai province and experience what real thirst-quenching feels like.<br/>Think aromas of pastry malt with slight maize notes and a medium-bodied palate with flavours of malt and maize, and just the perfect amount of bitterness for a crisp, clean and refreshing finish."
    },
    {
      "link": "https://untappd.com/b/4-pines-brewing-company-pacific-ale/2610103",
      "img": "4-pines-pacific.png",
      "name": "4 Pines Pacific Ale",
      "pct": 3.5,
      "style": "Pale Ale - Australian",
      "filterStyle": "Pale Ale",
      "notes": ["Light Bodied", "Tropical", "Fruity", "Clean"],
      "desc": "Hazy golden in appearance. Big fruity hop aromas of passionfruit, pineapple and pear are complemented by a smooth dry finish"
    },
    {
      "link": "https://untappd.com/b/bentspoke-brewing-co-fixie/4484183",
      "img": "bentspoke-fixie.png",
      "name": "Bentspoke Fixie",
      "pct": 3.5,
      "style": "Hard Ginger Beer",
      "filterStyle": "Ginger Beer",
      "notes": ["Ginger", "Sweet", "Honey", "Spiced", "Quaffable"],
      "desc": "Full mash, all grain brewed ginger with pressed ginger from Buderim QLD with a nice balance of sweetness and a ginger kick! This is a popular BentSpoke beer and was always requested by customers in our Braddon BrewPub to be canned. So we put it to a vote and they voted Ginger Beer as one of the top beers they wanted in a can. After a few years hiatus we have brought it back and relabelled the can."
    },
    {
      "link": "https://untappd.com/b/new-belgium-brewing-company-voodoo-ranger-hazy-india-pale-ale/4756318",
      "img": "new-belgium-voodoo-ranger-ipa.jpg",
      "name": "New Belgium Voodoo Ranger Hazy India Pale Ale",
      "pct": 5.0,
      "style": "IPA - New England / Hazy",
      "filterStyle": "IPA",
      "notes": ["Tropical", "Soft", "Light Bodied", "Sweet"],
      "desc": "Australian brewed version of the Voodoo Ranger IPA, at 5%."
    },
    {
      "link": "https://untappd.com/b/philter-brewing-xpa/1997370",
      "img": "philter-xpa.jpeg",
      "name": "Philter XPA",
      "pct": 4.2,
      "style": "Pale Ale - XPA (Extra Pale)",
      "filterStyle": "XPA",
      "notes": ["Light Bodied", "Fruity", "Hoppy", "Smooth", "Dry"],
      "desc": "Our XPA will meet you with tropical fruit aromas, delivering a distinctly refreshing hop flavour and leaving a balanced finish. Naturally cloudy and easy-drinking, she's a beaut.<br /><br/>Hops: Mosaic, Galaxy, Simcoe, Citra"
    },
    {
      "link": "https://untappd.com/b/philter-brewing-old-ale/4210605",
      "img": "philter-old-ale.jpeg",
      "name": "Philter Old ale",
      "pct": 4.5,
      "style": "Old / Stock Ale",
      "filterStyle": "Dark Beer",
      "notes": ["Roasty", "Light Bodied", "Chocolate", "Earthy", "Bitter"],
      "desc": "This is our take on a classic Aussie old. It’s a brewery ale crafted using roasted malts for a rich flavour full of chocolate and coffee notes with a medium bitter finish. It’s smooth, it’s dark, it’s old-school."
    },
    {
      "link": "https://untappd.com/b/philter-brewing-red/2158672",
      "img": "philter-red.jpeg",
      "name": "Philter Red",
      "pct": 4.8,
      "style": "Red Ale - Other",
      "filterStyle": "Red Ale",
      "notes": ["Malty", "Hoppy", "Caramelly", "Fruity", "Toffee"],
      "desc": "Here she is: Our big, punchy, red ale. Full of bold, hop aromas, this beer is loaded with passionfruit, melon, and citrus. And even berry notes. A light crystal malt character and medium bitterness to finish make this a ripper of a session ale.<br /><br />Hops: Cascade, Galaxy, Mosaic, Citra"
    },
    {
      "link": "https://untappd.com/b/philter-brewing-hazy-pale-ale/4241571",
      "img": "philter-hazy-pale.jpeg",
      "name": "Philter Hazy Pale Ale",
      "pct": 5.3,
      "style": "Pale Ale - New England / Hazy",
      "filterStyle": "Pale Ale",
      "notes": ["Hazy", "Citrus", "Light Bodied", "Juicy", "Quaffable"],
      "desc": "Here’s our Hazy Pale. With all the flavour you expect from a haze and the signature refreshment of our pales, this one is a juicy, easy-drinking gem.<br/>You can expect tropical fruit, floral, melon and lemon-lime aromas.<br /><br />Hops: Cashmere, Idaho, Citra, Mosaic"
    },
    {
      "link": "https://untappd.com/b/the-bondi-brewing-co-bondi-thicc/4021171",
      "img": "bondi-thicc.png",
      "name": "Bondi Thicc",
      "pct": 6.0,
      "style": "IPA - New England / Hazy",
      "filterStyle": "IPA",
      "notes": ["Tropical", "Juicy", "Peachy", "Grapefruity", "Malty"],
      "desc": "It’s a Juicy, Hazy IPA. Heaps of Amarillo, Centennial and Galaxy hops brewed with some weirdo super yeast known as Kveik Espe, and that makes it super awesomer.?<br/>Could it be the Thiccest of all the Hazys...?"
    },
    {
      "link": "https://untappd.com/b/lord-howe-island-brewing-co-golden-whistler/3557095",
      "img": "lorde-howe-golden-whistler.jpg",
      "name": "Lorde Howe Island Golden Whistler",
      "pct": 4.5,
      "style": "Lager - Pale",
      "filterStyle": "Lager",
      "notes": ["Clean", "Grassy", "Flat", "Apple", "Banana"],
      "desc": "The Golden Whistler Lager is a small batch International-style beer. This classic lager has a fresh, grassy hop palate, making it a great for sundowners over the lagoon."
    },
    {
      "link": "https://untappd.com/b/rocks-brewing-co-mid-strength-pale-ale-core-range/1726781",
      "img": "rocks-pale-ale.jpeg",
      "name": "Rocks Mid-Strength Pale Ale",
      "pct": 3.5,
      "style": "Pale Ale - American",
      "filterStyle": "Pale Ale",
      "notes": ["Light Bodied", "Hoppy", "Citrus", "Fruity"],
      "desc": "Herbal stone fruit aroma and the little brother of our American Pale Ale. This sessionable West Coast American Pale Ale boasts all the flavour of its older sibling but with less alcohol."
    },
    {
      "link": "https://untappd.com/b/garage-project-golden-path/3387267",
      "img": "garage-project-golden-path.jpeg",
      "name": "Garage Project Golden Path",
      "pct": 4.0,
      "style": "IPA - Session",
      "filterStyle": "IPA",
      "notes": ["Hazy", "Juicy", "Tropical", "Clean", "Light Bodied"],
      "desc": "A juicy, hazy, hop bomb with a surprisingly restrained alcohol content. A generous addition of Golden Naked Oats and Mosaic, Columbus and Strata hops create a beer bursting with flavour, with a balance and body belying its moderate strength. A delicious hoppy offering that’s more than a match for even the richest burger."
    },
    {
        "link": "https://untappd.com/b/yullis-brews-slick-ricks-rampaging-red-ale/846928",
        "img": "yullis-slick.jpeg",
        "name": "Yullis Slick Rick's Rampaging Red Ale",
        "pct": 6.2,
        "style": "Red Ale - American Amber / Red",
        "filterStyle": "Red Ale",
        "notes": ["Malty", "Hoppy", "Smooth", "Slick", "Sweet"],
        "desc": "Brewed with a combination of 5 carefully selected malts and 3 pungent US & AUS hop varieties, Slick Rick presents a deep amber/red colour, showing rich caramel malt flavours with a hint of roast and chocolate. This complex malt bill is backed by a solid whack of bitterness from Australian Vic Secret hops, whilst breathing aromas of fruit salad and pineapple from US hops Amarillo & Chinook. The mouthfeel is big, yet surprisingly dry"
    },
    {
        "link": "https://untappd.com/b/yulli-s-brews-amanda-mandarin-ipa/1681781",
        "img": "yullis-amanda.jpg",
        "name": "Yullis 'Amanda' Mandarin IPA",
        "pct": 6.7,
        "style": "IPA - American",
        "filterStyle": "IPA",
        "notes": ["Citrus", "Fruity", "Hoppy", "Bitter", "Subtle"],
        "desc": "This American style IPA is layered with a range of mandarin flavour from a carefully selected hop bill and a healthy serving of cold pressed mandarins blended with orange peel liqueur. The result is a super drinkable, fruit drivien IPA with an assertive mandarin peel bitterness and a dry mouthfeel. The perfect Winter IPA making use of our favourite seasonal citrus fruit."
    },
    {
        "link": "https://untappd.com/b/yulli-s-brews-fat-nerd-vanilla-porter/734257",
        "img": "yullis-nerd.jpg",
        "name": "Yullis Fat Nerd Vanilla Porter",
        "pct": 6.0,
        "style": "Porter - Other",
        "filterStyle": "Dark Beer",
        "notes": ["Vanilla", "Smooth", "Coffee", "Sweet", "Subtle"],
        "desc": ""
    },
    {
        "link": "https://untappd.com/b/yulli-s-brews-karaoke-kingu/3747759",
        "img": "yullis-karaoke.jpg",
        "name": "Yullis Karaoke Kingu",
        "pct": 4.2,
        "style": "Lager - Japanese Rice",
        "filterStyle": "Lager",
        "notes": ["Clean", "Crisp", "Light Bodied", "Aromatic", "Malty"],
        "desc": "Collaboration with Audio-Technica"
    },
    {
        "link": "https://untappd.com/b/yulli-s-brews-dolly-aldrin-strawberry-berliner-weisse/2917299",
        "img": "yullis-dolly.jpeg",
        "name": "Yullis Dolly Aldrin - Strawberry Berliner Weisse",
        "pct": 3.4,
        "style": "Sour - Fruited Berliner Weisse",
        "filterStyle": "Sour",
        "notes": ["Strawberry", "Sour", "Tart", "Sweet", "Dry"],
        "desc": "A traditional German style sour wheat ale, where low alcohol, tartness, and fruit combine to create the ultimate quencher! The beer undergoes a 24 hour period of lacto-fermentation where all the souring takes place, before being fermented as normal, and finally blended with freshly cold pressed Strawberries. The result is a deliciously fresh light and dry ale, with some upfront tartness, which is rounded out by the juicy fruit flavours."
    },
    {
        "link": "https://untappd.com/b/pinnacle-drinks-colossal-brewing-inner-gravity/4961867",
        "img": "collosal-inner-gravity.jpg",
        "name": "Colossal Brewing Inner Gravity",
        "pct": 4.3,
        "style": "Sour - Fruited",
        "filterStyle": "Sour",
        "notes": ["Passion Fruit", "Sour", "Sparkling", "Clean", "Dry"],
        "desc": "Passionfruit Sour Beer.<br/><br/>Experience a seismic implosion of refreshing passionfruit and juicy galaxy hops. The resulting aftermath is a fusion of sour candy and citrus with a naturally acidic finish"
    }
    
  ]
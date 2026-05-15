import re

path = r'c:\Users\TG200073\Downloads\Websites\varázsszönyeg\index.html'
content = open(path, encoding='utf-8').read()

new_jsonld = """  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://rendterem.hu/#business",
        "name": "Rendet Terem \u2013 kertfenntart\u00e1s",
        "alternateName": ["Var\u00e1zssz\u0151nyeg", "Sz\u0151nyeg S\u00e1ndor kertfenntart\u00e1s"],
        "description": "Sz\u0151nyeg S\u00e1ndor szakszer\u0171 kertfenntart\u00e1si szolg\u00e1ltat\u00e1sai Balatonf\u00fcreden: gy\u00fcm\u00f6lcsfa-metsz\u00e9s, sz\u0151l\u0151metsz\u00e9s, f\u0171ny\u00edr\u00e1s, s\u00f6v\u00e9nyv\u00e1g\u00e1s, permetez\u00e9s, z\u00f6ldhullad\u00e9k-elsz\u00e1ll\u00edt\u00e1s.",
        "url": "https://rendterem.hu",
        "logo": "https://rendterem.hu/favicon.svg",
        "image": "https://rendterem.hu/og-image.jpg",
        "telephone": "+36702374493",
        "priceRange": "\u20ac\u20ac",
        "currenciesAccepted": "HUF",
        "paymentAccepted": "K\u00e9szp\u00e9nz",
        "founder": {"@type": "Person", "name": "Sz\u0151nyeg S\u00e1ndor"},
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Balatonf\u00fcred",
          "postalCode": "8230",
          "addressRegion": "Veszpr\u00e9m",
          "addressCountry": "HU"
        },
        "geo": {"@type": "GeoCoordinates", "latitude": "46.9530", "longitude": "17.8869"},
        "areaServed": [
          {"@type": "City", "name": "Balatonf\u00fcred"},
          {"@type": "City", "name": "Tihany"},
          {"@type": "City", "name": "Csopak"},
          {"@type": "City", "name": "Balatonalm\u00e1di"},
          {"@type": "City", "name": "Balatonasz\u00f3f\u0151"},
          {"@type": "City", "name": "P\u00e9csely"},
          {"@type": "City", "name": "D\u00f6rgicse"},
          {"@type": "City", "name": "Balatonakali"},
          {"@type": "City", "name": "\u00d6rv\u00e9nyes"},
          {"@type": "City", "name": "Asz\u00f3f\u0151"},
          {"@type": "City", "name": "Balatonudvari"},
          {"@type": "AdministrativeArea", "name": "Veszpr\u00e9m v\u00e1rmegye"}
        ],
        "openingHoursSpecification": [{
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "07:00",
          "closes": "19:00"
        }],
        "availableLanguage": [{"@type": "Language", "name": "Hungarian", "alternateName": "hu"}],
        "sameAs": ["https://szonyegkert.hu", "https://www.facebook.com/varazsszonyeg"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Kertfenntart\u00e1si szolg\u00e1ltat\u00e1sok",
          "itemListElement": [
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Gy\u00fcm\u00f6lcsfa-metsz\u00e9s","description":"Alma-, k\u00f6rte-, szilva- \u00e9s egy\u00e9b gy\u00fcm\u00f6lcsfak metsz\u00e9se Balatonf\u00fcreden."}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Sz\u0151l\u0151metsz\u00e9s mag\u00e1nkertekben","description":"Sz\u0151l\u0151t\u0151k\u00e9k szakszer\u0171 metsz\u00e9se balatoni mag\u00e1nkertekben."}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Kasz\u00e1l\u00e1s, f\u0171ny\u00edr\u00e1s, szeg\u00e9lyv\u00e1g\u00e1s","description":"Gyep \u00e9s f\u0171 kasz\u00e1l\u00e1sa, ny\u00edr\u00e1sa, szeg\u00e9lyek gondoz\u00e1sa."}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"S\u00f6v\u00e9ny- \u00e9s bokorny\u00edr\u00e1s","description":"S\u00f6v\u00e9nyek, bokrok, d\u00edszcserj\u00e9k ny\u00edr\u00e1sa \u00e9s form\u00e1l\u00e1sa."}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Kisebb f\u00e1k kiv\u00e1g\u00e1sa","description":"Kisebb f\u00e1k \u00e9s csonkok biztons\u00e1gos kiv\u00e1g\u00e1sa."}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Permetez\u00e9s","description":"Gy\u00fcm\u00f6lcsfak \u00e9s n\u00f6v\u00e9nyek v\u00e9delmi permetez\u00e9se."}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Z\u00f6ldhullad\u00e9k-elsz\u00e1ll\u00edttat\u00e1s","description":"A kertfenntart\u00e1s sor\u00e1n keletkez\u0151 z\u00f6ldhullad\u00e9k elsz\u00e1ll\u00edttat\u00e1sa ig\u00e9ny eset\u00e9n."}}
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type":"Question","name":"Milyen ter\u00fcleteken v\u00e9gezel kertfenntart\u00e1st?","acceptedAnswer":{"@type":"Answer","text":"Els\u0151sorban Balatonf\u00fcreden \u00e9s k\u00f6rny\u00e9k\u00e9n: Tihany, Csopak, Balatonalm\u00e1di, P\u00e9csely, D\u00f6rgicse, \u00d6rv\u00e9nyes, Balatonakali, Asz\u00f3f\u0151. T\u00e1volabbi helysz\u00ednre is elmegyek \u2013 egyeztess\u00fcnk: 06-70-237-4493."}},
          {"@type":"Question","name":"Hogyan lehet id\u0151pontot foglalni?","acceptedAnswer":{"@type":"Answer","text":"Telefonon: 06-70-237-4493. El\u00e9rhet\u0151 vagyok WhatsApp-on, Viberen \u00e9s Messengeren is. \u00c1ltal\u00e1ban 24 \u00f3r\u00e1n bel\u00fcl visszajelzek."}},
          {"@type":"Question","name":"Mit tartalmaz a kertfenntart\u00e1s?","acceptedAnswer":{"@type":"Answer","text":"Gy\u00fcm\u00f6lcsfa- \u00e9s sz\u0151l\u0151metsz\u00e9s, f\u0171ny\u00edr\u00e1s, s\u00f6v\u00e9ny- \u00e9s bokorny\u00edr\u00e1s, kisebb fav\u00e1g\u00e1s, permetez\u00e9s, z\u00f6ldhullad\u00e9k-elsz\u00e1ll\u00edttat\u00e1s. A pontos feladatokat el\u0151zetes egyeztet\u00e9ssel hat\u00e1rozzuk meg."}}
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://rendterem.hu/#webpage",
        "url": "https://rendterem.hu/",
        "name": "Kertfenntart\u00e1s Balatonf\u00fcreden \u2013 Rendet Terem",
        "inLanguage": "hu",
        "isPartOf": {"@id": "https://rendterem.hu/#business"},
        "breadcrumb": {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"F\u0151oldal","item":"https://rendterem.hu/"}]}
      }
    ]
  }
  </script>"""

# Replace old JSON-LD block AND the duplicate favicon link after it
old_pattern = r'  <script type="application/ld\+json">.*?  </script>\n  <link rel="icon" href="favicon\.svg" type="image/svg\+xml">'
new_content = re.sub(old_pattern, new_jsonld, content, flags=re.DOTALL)

if new_content == content:
    # Try without duplicate favicon (in case it was already removed)
    old_pattern2 = r'  <script type="application/ld\+json">.*?  </script>'
    new_content = re.sub(old_pattern2, new_jsonld, content, flags=re.DOTALL)
    if new_content == content:
        print('NO CHANGE - pattern not found')
    else:
        open(path, 'w', encoding='utf-8').write(new_content)
        print('OK - replaced (no duplicate favicon)')
else:
    open(path, 'w', encoding='utf-8').write(new_content)
    print('OK - replaced + removed duplicate favicon')

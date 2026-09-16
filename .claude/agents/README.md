# Agendid (Claude Code subagents)

Selles kaustas olevad `.md` failid on Claude Code'i **subagendid**. Claude Code laeb nad
automaatselt, kui käivitad `claude` selle repo kaustas.

| Agent | Mida teeb | Millal käivitub |
|---|---|---|
| `hindamismaatriks` | Loeb hindamismaatriksi sõna-sõnalt läbi, teeb nõuete kontroll-loendi, auditeerib töö iga kriteeriumi vastu, arvutab punktid ja hinde ning ütleb täpselt, mida parandada | Kui jutuks tuleb hindamismaatriks, hindamiskriteeriumid, punktiskeem, „kas see vastab nõuetele", „mitu punkti saan" |
| `praha-kevad` | Praha kevade (Tšehhoslovakkia 1968) ainespetsialist: esseed, esitlused, ajateljed, allikaanalüüs, faktikontroll | Kui teemaks on Praha kevad, Dubček, 21. august 1968, Brežnevi doktriin, normaliseerimine |

## Kasutamine

Enamasti piisab tavalisest küsimusest — Claude valib agendi kirjelduse järgi ise:

```
> Siin on ajalootöö hindamismaatriks (pilt). Kas mu essee vastab sellele?
> Tee mulle Praha kevade esitlus, 10 slaidi, gümnaasiumile.
```

Agendi saab ka otse nimetada:

```
> Kasuta hindamismaatriks agenti ja auditeeri see fail: essee.docx
> Lase praha-kevad agendil faktid üle kontrollida.
```

## Koos kasutamine (soovitatav töövoog)

1. `praha-kevad` kirjutab või parandab sisu ja kontrollib faktid.
2. `hindamismaatriks` auditeerib tulemuse maatriksi vastu ja loetleb puudujäägid.
3. Parandad puudujäägid ja lased 2. sammu uuesti läbi, kuni kõik kriteeriumid on täidetud.

Sisu õigsus ja maatriksile vastavus on **kaks eraldi kontrolli** — tee alati mõlemad.

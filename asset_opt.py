from pathlib import Path
import re
root=Path('/tmp/ftc6198')

def img_markup(name, alt, cls='', eager=False):
    stem=Path(name).stem
    # get dimensions from 1600w variant
    from PIL import Image
    im=Image.open(root/'assets/images'/f'{stem}-1600w.webp')
    w,h=im.size
    loading='eager' if eager else 'lazy'
    priority=' fetchpriority="high"' if eager else ''
    return (f'<picture class="{cls}"><source type="image/webp" srcset="assets/images/{stem}-480w.webp 480w, assets/images/{stem}-960w.webp 960w, assets/images/{stem}-1600w.webp 1600w" sizes="(max-width: 650px) 50vw, (max-width: 950px) 33vw, 25vw">'
            f'<img src="assets/images/{stem}.jpg" alt="{alt}" width="{w}" height="{h}" loading="{loading}" decoding="async"{priority}></picture>')

# Header logo on every page
for f in root.glob('*.html'):
    s=f.read_text()
    s=s.replace('<img src="IMAGES/Logo.PNG" alt="FTC Team 6198 logo">',
                '<img class="brand-logo" src="assets/images/Logo.webp" alt="FTC Team 6198 logo" width="512" height="355" loading="eager" decoding="async">')
    # Replace regular gallery images
    pattern=r'<img src="IMAGES/(LeagueMeet1-Picture\d+\.jpg)" alt="([^"]+)">'
    def repl(m):
        return img_markup(m.group(1),m.group(2), 'gallery-image', eager=(f.name=='index.html' and m.group(1)=='LeagueMeet1-Picture2.jpg'))
    s=re.sub(pattern,repl,s)
    f.write_text(s)

# team dynamic image: robust responsive member image when a photo filename is supplied.
f=root/'team.html'; s=f.read_text()
old='${m.photo ? `<img src="${m.photo}" alt="${m.name}">` : `<div class="avatar-placeholder">${m.initials}</div><div class="photo-note">ADD APPROVED PHOTO · ${m.initials}</div>`}'
new='${m.photo ? `<img class="member-img" src="${m.photo}" alt="${m.name}" width="800" height="600" loading="lazy" decoding="async">` : `<div class="avatar-placeholder">${m.initials}</div><div class="photo-note">ADD APPROVED PHOTO · ${m.initials}</div>`}'
s=s.replace(old,new)
f.write_text(s)

# data.js: use clean path convention in comments/examples while leaving photos null until approved headshots exist.
f=root/'assets/js/data.js'; s=f.read_text()
s=s.replace('photo:null', 'photo:null')
f.write_text(s)

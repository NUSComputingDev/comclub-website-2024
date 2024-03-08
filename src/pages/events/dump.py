import json


wellness_festival_body = '''
Hey SoC Students,

Are you feeling the mid-semester slump? Is your brain starting to feel fried from staring at endless lines of code? If so, don’t panic. We’ve got the antidote for you!

This year, we are introducing Canine Companion: Interacting with Dogs, a collaboration between Student Life Office and Computing Club.

Registration is free for all NUS SoC students!

Please note:
Event is limited to 10-minute timeslot per person. You will be allocated to, and informed about a specific 10-minute timeslot within the window period that the event is conducted.

Do check out some other exciting workshops under SoC Wellness Festival 2024 too😎😎:
- Craft your own Musical Box
- Build your own Air Plant Terrarium
- Embrace Nature with Forest Therapy

Slots are limited so do register your interest at https://forms.office.com/r/4vfPX0aiCF now!
'''

bizcom_league_body = '''
HEY SOC🤓
Recess week is almost here 😋! are you looking for ways to destress?? 😌 AND meet new friends 🥳🥳?

Join us at BIZCOM LEAGUE, and stand a chance to win:
- HaiDiLao vouchers 🍲 - Grab vouchers 🚗
- NTUC vouchers 🍾
- JBL speakers 🔈!
- FREE JERSEYS 👕
anddddd most importantly, IT’s FREE!!!! 🤑


BIZCOM LEAGUE IS BACK AGAIN😱😱🤩🤩 between NUS Computing Club and NUS Bizad Club where you get to make some new Biz friends! (You may sign up in groups of 8 MAX, or even solo!)
All you have to do is sign up and play four sports (basketball🏀 , dodgeball 🤾‍♀️, ultimate frisbee🥏 , captain’s ball 🏐) over the course of two days!

WHEN?
‼️26 Feb 9am - 7pm
‼️27 Feb 9am - 7pm

So WHAT ARE YOU WAITING FOR⁉️SIGN UP NOW‼️ you won’t regret it 🤭
https://nus.campuslabs.com/engage/submitter/form/start/626464
'''


# temporary stopgap for article content
# convert multiline articles into json
if __name__ == '__main__':
    articles = {
        'wellness_festival': {
            'title': 'SOC Wellness Festival',
            'body': wellness_festival_body,
            'link': 'wellness_festival',
            'imgSrc': 'https://nuscomputingdev.github.io/comclub-website-2024/articles/wellness_festival.jpg',
        },
        'bizcom_league': {
            'title': 'BIZCOM League',
            'body': bizcom_league_body,
            'link': 'bizcom_league',
            'imgSrc': 'https://nuscomputingdev.github.io/comclub-website-2024/articles/bizcom_league.jpg',
        },
    }
    json.dump(articles, open('articles.json', 'w+'))

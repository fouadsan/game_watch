from requests_html import HTML, HTMLSession


with open('web.html') as html_file:
    source = html_file.read()
    html = HTML(html=source)

items = html.find("a")

print(items)

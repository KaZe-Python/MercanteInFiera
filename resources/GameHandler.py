from flask import render_template

def _play():
    return render_template('player.html')

def _admin():
    return render_template('admin.html')
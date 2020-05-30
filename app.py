# from flask import Flask, render_template, request, redirect
# import datetime
# import pytz # timezone 
# import requests
import os

from flask import Flask, jsonify, request, redirect, url_for, render_template, send_from_directory
import uuid



# app = Flask(__name__)
app = Flask(__name__, static_url_path='/static')


@app.route('/', methods=['GET'])
def home_page():
	# return render_template('index.html')
  return app.send_static_file('index.html')

# @app.route('/<name>')
# def profile(name):
# 	return render_template('index.html', name=name)


# @app.route('/add_numbers', methods=['GET','POST'])
# def add_numbers_post():
# 	  # --> ['5', '6', '8']
# 	  # print(type(request.form['text']))
# 	  if request.method == 'GET':
# 	  	return render_template('add_numbers.html')
# 	  elif request.method == 'POST':
#   	      print(request.form['text'].split())
#   	      total = 0
#   	      try:
#   	      	for str_num in request.form['text'].split():
#   	      		total += int(str_num)
#   	      	return render_template('add_numbers.html', result=str(total))
#   	      except ValueError:
#   	      	return "Easy now! Let's keep it simple! 2 numbers with a space between them please"


# @app.route('/shopping_list', methods=['GET','POST'])
# def shopping_list_post():
# 	  # --> ['5', '6', '8']
# 	  # print(type(request.form['text']))

#     if request.method == 'GET':
#       return render_template('shopping_list.html')
#     elif request.method == 'POST':
#           print(request.form['text'].split())
          
#           shop_list = []
#           try:
#             for item in request.form['text'].split():
              
#               shop_list.append(item)

              
              
#             return render_template('shopping_list.html', result="\n".join([str(item) for item in shop_list]))
#           except ValueError:
#             return "Easy now! Let's keep it simple! Just words with a space between them"
          
  	      
# @app.route('/time', methods=['GET','POST'])
# def time_post():
#     # --> ['5', '6', '8']
#     # print(type(request.form['text']))

#     if request.method == 'GET':
#       return render_template('time.html')
#     elif request.method == 'POST':
#           print(request.form['text'].split())
          
#           for item in request.form['text'].split():
#             answer = (datetime.datetime.now(pytz.timezone("Europe/Dublin")).strftime('Time = ' + '%H:%M:%S' + ' GMT ' + ' Year = ' + '%d-%m-%Y'))
#             #answer = datetime.datetime.now().strftime('Time == ' + '%H:%M:%S' + ' Year == ' + '%d-%m-%Y')
#             #answer = datetime.datetime.now().strftime('%Y-%m-%d \n %H:%M:%S')

              
              
#             return render_template('time.html', result=answer)

         

# @app.route('/python_apps')
# def python_apps_page():
# 	# testing stuff
# 	return render_template('python_apps.html')


# @app.route('/contact')
# def contact():
# 	return render_template('contact.html')

# @app.route('/blog', methods=['GET'])
# def blog_page():
#   return render_template('blog.html')

@app.route('/api/v1/addElement')
def addElement(width=60,depth=60,height=90,elType="base",drawers=0,cjRoom=3,equipment=[],hDivider=0,vDivider=0):
    '''
    use:
    http://localhost:5000/api/v1/addElement?&width=60&depth=60&height=90&elType=base&drawers=0&cjRoom=3&equipment=20&equipment=30&hDivider=0&vDivider=0
    '''
    width= float(request.args["width"])
    depth= float(request.args["depth"])
    height= float(request.args["height"])
    elType= str(request.args["elType"])
    drawers= int(request.args["drawers"])
    cjRoom= float(request.args["cjRoom"])
    equipment=request.args.getlist('equipment', type=float)
    # equipment = [float(x) for x in equipment]
    hDivider= int(request.args["hDivider"])
    vDivider= int(request.args["vDivider"])
    #print(width,depth,height,elType,drawers,cjRoom,equipment,hDivider,vDivider, file=sys.stderr)
    #app.logger.info(width,depth,height,elType,drawers,cjRoom,equipment,hDivider,vDivider)
    #app.logger.info("equipment is:",equipment)

    '''
    jos u radu, drawers nemaju dobre pozicije treba za cj handle to srediti
    doors isto mi se cini da im mozda nisu tocne mjere - provjetiti da li se 2mm sa svake strane odreze 
    fali corner 
    vDivider nije jos unutra
    '''
    # all units in cm
    toeKick=10 #cm
    tallZ=150 #cm
    workTopThick=2 #cm
    plyThick=1.6 #cm
    frontThick=2.0 #cm
    frontOverhang = 0.2 #cm from each side
    backThick=0.4 #cm
    dividerEvery=50 #cm
    
    zOffset=0 # pozicija elementa u z smjeru, za top elemente ce biti >0
    if elType=="top":
        toeKick=0
        workTopThick=0
        zOffset=tallZ
    if elType=="tall":
        workTopThick=0
        
    elementId=uuid.uuid4()
    '''
    postavljanje stranica
    - za top element opcija za dupli bottom - HOLD
    - za corner unit - HOLD
    '''
    
    element=[{'elementId':elementId,'type':elType,'tag':"left",
              "length":depth-backThick-frontThick,
              "width":height-toeKick-plyThick-workTopThick,
              "thick":plyThick,
             "gXwidth":plyThick,"gYdepth":depth-backThick-frontThick,"gZheight":height-toeKick-plyThick-workTopThick,
             'centre':{'x':plyThick/2,'y':(depth-backThick-frontThick)/2+frontThick,'z':(height-toeKick-plyThick-workTopThick)/2+toeKick+zOffset}},
    
             {'elementId':elementId,'type':elType,'tag':"right",
     "length":depth-backThick-frontThick,"width":height-toeKick-plyThick-workTopThick,"thick":plyThick,
    "gXwidth":plyThick,"gYdepth":depth-backThick-frontThick,"gZheight":height-toeKick-plyThick-workTopThick,
    'centre':{'x':width-plyThick/2,'y':(depth-backThick-frontThick)/2+frontThick,'z':(height-toeKick-plyThick-workTopThick)/2+toeKick+zOffset}},
    
             {'elementId':elementId,'type':elType,'tag':"bottom",
     "length":depth-backThick-frontThick,"width":width-2*plyThick,"thick":plyThick,
    "gXwidth":width-2*plyThick,"gYdepth":depth-backThick-frontThick,"gZheight":plyThick,
    'centre':{'x':(width-2*plyThick)/2+plyThick,'y':(depth-backThick-frontThick)/2+frontThick,'z':(plyThick/2)+toeKick+zOffset}},
    
             {'elementId':elementId,'type':elType,'tag':"top",
     "length":depth-backThick-frontThick,"width":width,"thick":plyThick,
    "gXwidth":width,"gYdepth":depth-backThick-frontThick,"gZheight":plyThick,
    'centre':{'x':(width)/2,'y':(depth-backThick-frontThick)/2+frontThick,'z':height-(plyThick/2)-workTopThick+zOffset}},
    
             {'elementId':elementId,'type':elType,'tag':"back",
     "length":width,"width":height-toeKick-workTopThick,"thick":backThick,
    "gXwidth":width,"gYdepth":backThick,"gZheight":height-toeKick-workTopThick,
    'centre':{'x':(width)/2,'y':depth-backThick/2,'z':height-(height-toeKick-workTopThick)/2-workTopThick+zOffset}}]
    
    '''
    postavljanje pregrada i uzimanje u obzir equipment
    '''
    remainingHeight=int(height-toeKick-sum(equipment)-2*plyThick) # prostor unutar elementa za police ili equipment
    if remainingHeight<0:
        raise ValueError(f'Equipment height {sum(equipment)} is bigger than the element {height-toeKick-2*plyThick}')
    elif remainingHeight<40: # 40 min visina za vrata ili ladice
        equipmentZ=remainingHeight
        aboveEquipment=remainingHeight-equipmentZ
        belowEquipment=equipmentZ
    elif remainingHeight>80+40:
        equipmentZ=80
        aboveEquipment=remainingHeight-equipmentZ
        belowEquipment=equipmentZ
    else:
        equipmentZ=remainingHeight/2
        aboveEquipment=remainingHeight-equipmentZ
        belowEquipment=equipmentZ
#     print(f"Eq z position:{equipmentZ}, space above:{aboveEquipment},space below:{belowEquipment}")
    for equip in equipment: # dodati pregradu ispod svakog equipmenta
        element.append({'elementId':elementId,'type':elType,'tag':"divider",
                        "length":depth-backThick-frontThick,"width":width-2*plyThick,"thick":plyThick,
                        "gXwidth":width-2*plyThick,"gYdepth":depth-backThick-frontThick,"gZheight":plyThick,
                        'centre':{'x':(width-2*plyThick)/2+plyThick,
                                  'y':(depth-backThick-frontThick)/2+frontThick,
                                  'z':(plyThick/2)+toeKick+zOffset+equipmentZ}})
        equipmentZ+=equip
    # dodati pregradu iznad zadnjeg equipmenta, ako nema equipmenta onda to treba izbrisati
    element.append({'elementId':elementId,'type':elType,'tag':"divider",
                    "length":depth-backThick-frontThick,"width":width-2*plyThick,"thick":plyThick,
                    "gXwidth":width-2*plyThick,"gYdepth":depth-backThick-frontThick,"gZheight":plyThick,
                    'centre':{'x':(width-2*plyThick)/2+plyThick,
                              'y':(depth-backThick-frontThick)/2+frontThick,
                              'z':(plyThick/2)+toeKick+zOffset+equipmentZ}})
        
    
    
    if equipment==[]:
        equipmentZ=0
        aboveEquipment=0
        belowEquipment=remainingHeight
        del element[-1] # ovdje brisemo pregradu iznad equipmenta ako nema equipmenta
    
    '''
    postavljanje polica: 
    - ako nema eqipmenta prostor raspoloziv je samo belowEquipment
    - ako element ima drawers onda se ne postavljaju police - samo na belowEquipment
    - ako ima drawers na prostor aboveEquipment idu police
    - ako je zadan broj polica onda se uzme taj broj mjesto svakih dividerEvery
    ''' 
    if hDivider==0:
        for divider in range(0,int(aboveEquipment),dividerEvery):
            if divider==0: continue
            element.append({'elementId':elementId,'type':elType,'tag':"divider",
                            "length":depth-backThick-frontThick,"width":width-2*plyThick,"thick":plyThick,
                            "gXwidth":width-2*plyThick,"gYdepth":depth-backThick-frontThick,"gZheight":plyThick,
                            'centre':{'x':(width-2*plyThick)/2+plyThick,
                                      'y':(depth-backThick-frontThick)/2+frontThick,
                                      'z':(plyThick/2)+toeKick+zOffset+equipmentZ+divider}})
        if drawers == 0:
            for divider in range(0,int(belowEquipment),dividerEvery):
                if divider==0: continue
                element.append({'elementId':elementId,'type':elType,'tag':"divider",
                                "length":depth-backThick-frontThick,"width":width-2*plyThick,"thick":plyThick,
                                "gXwidth":width-2*plyThick,"gYdepth":depth-backThick-frontThick,"gZheight":plyThick,
                                'centre':{'x':(width-2*plyThick)/2+plyThick,
                                          'y':(depth-backThick-frontThick)/2+frontThick,
                                          'z':(plyThick/2)+toeKick+zOffset+divider}})
    elif  hDivider>0:
        # stavimo police (hDiveder) u prostor iznad i ispod equipmenta u jednakim razmacima. Znaci x hDivider se postavi above i below
        if aboveEquipment>0:
            divider=aboveEquipment/(hDivider+1)
            for dividerNo in range(hDivider):
                element.append({'elementId':elementId,'type':elType,'tag':"divider",
                            "length":depth-backThick-frontThick,"width":width-2*plyThick,"thick":plyThick,
                            "gXwidth":width-2*plyThick,"gYdepth":depth-backThick-frontThick,"gZheight":plyThick,
                            'centre':{'x':(width-2*plyThick)/2+plyThick,
                                      'y':(depth-backThick-frontThick)/2+frontThick,
                                      'z':(plyThick/2)+toeKick+zOffset+equipmentZ+divider*(dividerNo+1)}})

        
        if drawers == 0 and belowEquipment>0:
            divider=belowEquipment/(hDivider+1)
            for dividerNo in range(hDivider):
                element.append({'elementId':elementId,'type':elType,'tag':"divider",
                            "length":depth-backThick-frontThick,"width":width-2*plyThick,"thick":plyThick,
                            "gXwidth":width-2*plyThick,"gYdepth":depth-backThick-frontThick,"gZheight":plyThick,
                            'centre':{'x':(width-2*plyThick)/2+plyThick,
                                      'y':(depth-backThick-frontThick)/2+frontThick,
                                      'z':(plyThick/2)+toeKick+zOffset+equipmentZ+divider*(dividerNo+1)}})


    '''
    postavljanje ladica:
    - ako ima broja ladica onda se postave
    - ladice se postavljaju samo ispod equipmenta iznad idu obavezna vrata
    '''
    if drawers > 0:
        # velicina ladice trebalo bi postaviti ako ima vise jednu vecu, pa manju itd ali za sada podjelimo jednako
        drawerZheight=(belowEquipment+2*plyThick-2*cjRoom-2*frontOverhang)/drawers
        for drawer in range(drawers):
            element.append({'elementId':elementId,'type':elType,'tag':"drawer",
                         "length":width-2*frontOverhang,
                         "width":drawerZheight, # assuming for now equal drawer size max drawers 4 min 2
                         "thick":frontThick,
                        "gXwidth":width-2*frontOverhang,"gYdepth":frontThick,"gZheight":drawerZheight,
                        'centre':{'x':(width)/2,
                                  'y':(frontThick)/2,
                                  'z':toeKick+drawerZheight/2+drawerZheight*drawer+zOffset}})
        if width <= 60:
            doors = 1
        else:
            doors = 2
        for door in range(doors):
            if aboveEquipment>0:
                doorZheight=(aboveEquipment+2*plyThick-cjRoom-2*frontOverhang)
                element.append({'elementId':elementId,'type':elType,'tag':"door",
                            "length":width/doors-2*frontOverhang,"width":doorZheight,"thick":frontThick,
                            "gXwidth":width/doors-2*frontOverhang,"gYdepth":frontThick,"gZheight":doorZheight,
                            'centre':{'x':width/doors/2+width/doors*(door),
                                      'y':(frontThick)/2,
                                      'z':doorZheight/2+toeKick+zOffset+cjRoom+equipmentZ}})
    else:
        if width <= 60:
            doors = 1
        else:
            doors = 2
        for door in range(doors):
            doorZheight=(belowEquipment+2*plyThick-cjRoom-2*frontOverhang)
            element.append({'elementId':elementId,'type':elType,'tag':"door",
                            "length":width/doors-2*frontOverhang,"width":doorZheight,"thick":frontThick,
                            "gXwidth":width/doors-2*frontOverhang,"gYdepth":frontThick,"gZheight":doorZheight,
                            'centre':{'x':width/doors/2+width/doors*(door),
                                      'y':(frontThick)/2,
                                      'z':doorZheight/2+toeKick+zOffset-cjRoom/2}})
            if aboveEquipment>0:
                doorZheight=(aboveEquipment+2*plyThick-cjRoom-2*frontOverhang)
                element.append({'elementId':elementId,'type':elType,'tag':"door",
                            "length":width/doors-2*frontOverhang,"width":doorZheight,"thick":frontThick,
                            "gXwidth":width/doors-2*frontOverhang,"gYdepth":frontThick,"gZheight":doorZheight,
                            'centre':{'x':width/doors/2+width/doors*(door),
                                      'y':(frontThick)/2,
                                      'z':doorZheight/2+toeKick+zOffset+cjRoom+equipmentZ}})
                
    return jsonify(element)


app.run(host=os.getenv('IP', '0.0.0.0'), port = int(os.getenv('PORT', 8080)))

if __name__ == '__main__':
	app.run(debug=False)

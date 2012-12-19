
PHANTOM.JS = C:\\Users\\jl66\\Projects\\phantomjs-1.7.0-windows\\phantomjs.exe

menu:
	@echo + Targets:
	@echo + 
	@echo + all - create bullet.png file from bullet.html
	@echo + clean - delete unnecessary file

all:
	cmd /c "$(PHANTOM.JS)" rasterize.js bullet.html bullet.png
	
clean:
	@cmd /c del bullet.pdf bullet.png bullet.svg circle.svg

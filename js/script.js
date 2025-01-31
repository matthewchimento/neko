// Java neko 2.0.1
// neko.properties  2.0.1  2019-02-02
// Copyright (c) 2019 Jerry Reno
// This is public domain software, under the terms of the UNLICENSE
// http://unlicense.org 

// Values in this file will be overridden by ~/neko.properties
// (On Windows, that would be C:\Users\username\neko.properties)

// The properties are read on startup and when the window mode changes.
// You can verify that 'your' file is being used by setting "hello"


// Message to print when the settings are loaded
// hello=Hello, world!

// Window title
windowTitle=\u732b

//
// Distances
//

// Distance that the mouse must be from the sleeping kitten to wake it
triggerDistance=64
// How fast the kitty runs
runDistancePerFrame=16

// offset from the mouse (pixels) that the kitty will be chasing.
offsetx=-2
offsety=-3
// how close the kitty needs to get to the mouse
catchDistance=2

// The difference between catchDistance and offset is that the
// catchDistance lets the kitty miss the goal by a bit.
// The offset actually moves the goal. As long as offset>catchDistance,
// the kitty shouldn't interfere with the mouse too much.

// Framerates for various animations (frames per second)
// Keep in mind there are only two frames per animation!
maxFramerate=10
runFramerate=8
sitFramerate=3
sharpenFramerate=3
scratchFramerate=10
loadFramerate=20

// Delays for various animations (microseconds)
sleepDelay=1200
yawnDelay=1500
surpriseDelay=1000
import P5 from 'p5';
import * as Tone from 'tone';

const NOTES = ["C", "Db", "F", "Gb", "Bb"];
const OCTAVES = [2, 3, 4];

Tone.Destination.volume.value = -8;
const synth = new Tone.Synth({oscillator: { type: "sine" }}).toDestination();
let feedbackDelay = new Tone.FeedbackDelay("8n", 0.6);
synth.connect(Tone.Destination);
synth.connect(feedbackDelay);
feedbackDelay.connect(Tone.Destination);

function sketch(p5: P5) {
	p5.setup = function() {
		p5.createCanvas(p5.windowWidth, p5.windowHeight);
		p5.background(0, 0, 0, 0);
	}
	
	p5.windowResized = function() {
		p5.resizeCanvas(p5.windowWidth, p5.windowHeight, false);
	}
	
	p5.draw = function() {
		const opacity = 0.05;
		p5.background(0, 0, 0, opacity * 255);
	}
	
	p5.mousePressed = function() {
		p5.background("white");
		p5.stroke(0, 0);
		
		const whatColor = Math.floor(5 * p5.random());
		const whatShape = Math.floor(3 * p5.random());
		
		let colorName: string;
		
		switch (whatColor) {
			case 0:
				p5.fill("#FB5012");
				colorName = "Orange Aerospace";
				break;
			case 1:
				p5.fill("#01FDF6");
				colorName = "Fluorescent Blue";
				break;
			case 2:
				p5.fill("#CBBAED");
				colorName = "Lavender Blue";
				break;
			case 3:
				p5.fill("#E9DF00");
				colorName = "Titanium Yellow";
				break;	
			case 4:
				p5.fill("#FB5012");
				colorName = "Sea Green Crayola";
				break;
			default:
				p5.fill("#FB5012");
				colorName = "Orange Aerospace";
				break;
		}
		
		switch (whatShape) {
			case 0:
				p5.rect(p5.mouseX, p5.mouseY, 80, 80, 20);
				break;
			case 1:
				p5.ellipse(p5.mouseX, p5.mouseY + 40, 80, 80);
				break;
			case 2:
				p5.triangle(p5.mouseX, p5.mouseY, p5.mouseX - 20, p5.mouseY, p5.mouseX - 10, p5.mouseY + 20);
				break;
			default:
				p5.rect(p5.mouseX, p5.mouseY, 80, 80, 20);
				break;
		}		

		p5.text(colorName, p5.mouseX, p5.mouseY + -8);

		const n = p5.random(NOTES);
		const o = p5.random(OCTAVES);
		
		synth.triggerAttackRelease(n + o, "8n");
	}
	
	function clearCanvas(color: string): void {
		
	}
}

new P5(sketch);
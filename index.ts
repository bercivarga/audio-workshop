import P5 from 'p5';
import * as Tone from 'tone';

const NOTES = ["C", "Db", "F", "Gb", "Bb"];
const OCTAVES = [2, 3, 4];

Tone.Destination.volume.value = -8;
const synth = new Tone.Synth({oscillator: { type: "sine" }}).toDestination();
synth.connect(Tone.Destination);

function sketch(p5: P5) {
	p5.setup = function() {
		p5.createCanvas(p5.windowWidth, p5.windowHeight);
		p5.background(220);
	}
	
	p5.windowResized = function() {
		p5.resizeCanvas(p5.windowWidth, p5.windowHeight, false);
	}
	
	p5.mousePressed = function() {
		p5.stroke(0, 0);
		
		const whatColor = Math.floor(5 * p5.random());
		const whatShape = Math.floor(3 * p5.random());
		
		let colorName: string;
		
		switch (whatColor) {
			case 0:
				p5.fill('#FB5012');
				colorName = "Orange Aerospace";
				p5.text(colorName, p5.mouseX, p5.mouseY + -8);
				break;
			case 1:
				p5.fill('#01FDF6');
				colorName = "Fluorescent Blue";
				p5.text(colorName, p5.mouseX, p5.mouseY + -8);
				break;
			case 2:
				p5.fill('#CBBAED');
				colorName = "Lavender Blue";
				p5.text(colorName, p5.mouseX, p5.mouseY + -8);
				break;
			case 3:
				p5.fill('#E9DF00');
				colorName = "Titanium Yellow";
				p5.text(colorName, p5.mouseX, p5.mouseY + -8);
				break;	
			case 4:
				p5.fill('#FB5012');
				colorName = "Sea Green Crayola";
				p5.text(colorName, p5.mouseX, p5.mouseY + -8);
				break;
			default:
				p5.fill('#FB5012');
				colorName = "Orange Aerospace";
				p5.text(colorName, p5.mouseX, p5.mouseY + -8);
				break;
		}
		
		switch (whatShape) {
			case 0:
				p5.rect(p5.mouseX, p5.mouseY, 80, 80, 20);
				break;
			case 1:
				p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);
				break;
			case 2:
				p5.triangle(p5.mouseX, p5.mouseY, p5.mouseX - 20, p5.mouseY, p5.mouseX - 10, p5.mouseY + 20);
				break;
			default:
				p5.rect(p5.mouseX, p5.mouseY, 80, 80, 20);
				break;
		}		
		const n = p5.random(NOTES);
		const o = p5.random(OCTAVES);
		
		synth.triggerAttackRelease(n + o, "8n");
	}
}

new P5(sketch);
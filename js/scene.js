const SCENES = {
    scene1: {
        text: "The sirens scream. Something has broken through the wall.",
        choices = [
            { label: "Fight", next: "scene2A" },
            { label: "Run", next: "scene2B" },
            { label: "Help a civilian", next: "scene2C", effect: s => s.helped = true }
        ]
    },

    scene2A: {
        text: "You charge forward. Your hands shake, but you don't stop.",
        choices: [
            { label: "Attack", end: "Too slow. The blade never landed." },
            { label: "Retreat", next: "scene3" }
        ]
    },

    scene2B: {
        text: "Your leg moves before your mind does. The smoke swallows everything.",
        choices: [
            { label: "Hide", end: "They always chek the shadows." }
        ]
    },

    scene2C: {
        text: "A child is frozen in the street, screaming. You move without thinking.",
        choices: [
            { label: "Carry them", next: "scene3", effect: s => s.helped = true },
            { label: "Leave them", next: "scene3", effect: s => s.selfish = true }
        ]
    },

    scene3: {
        text: "You reach the rooftops. Below, the city burns. Up here, silence.",
        choices: [
            { label: "Fire a signal flare", next: "scene4A" },
            { label: "Stay hidden", next: "scene4B" }
        ]
    },

    scene4A: {
        text: "The flare tears through the smoke. For a second, everything is bright.",
        choices: [
            { label: "Wait for a response", end: "You drew their eyes. They found you." },
            { label: "Move immediately", next: "scene5" }
        ]
    },

    scene4B: {
        text: "You press yourself against the chimney. You can hear them below.",
        choices: [ 
            { label: "Stay perfectly still", end: "You waited too long. The roof gave way."},
            { label: "Move now", next: "scene5" }
        ]
    },

    scene5: {
        text: "The gate. It's still open, barely. Your les have no energy left.",
        choices: [
            {
                label: "Run",
                end: state => {
                    if (state.helped)  return "The child makes it through the gate.\n\nYou don't.\n\nThey will remember your face.";
                    if (state.selfish) return "You make it out.\n\nYou are alive.\n\nNo one will ever know your name.";
                    if (Math.random() < 0.2) return "You collapse past the gate.\n\nSomehow — you're still breathing.\n\nYou survived. No reason. Just luck.";
                    return "So close.\n\nThe gate closes.\n\nYou almost made it.";
        }
      }
    ]
  }
};
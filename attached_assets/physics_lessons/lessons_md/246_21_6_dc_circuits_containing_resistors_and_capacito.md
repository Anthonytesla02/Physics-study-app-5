# 21.6 DC Circuits Containing Resistors and Capacitors

[Original URL](https://openstax.org/books/college-physics-2e/pages/21-6-dc-circuits-containing-resistors-and-capacitors)

## 21.6 DC Circuits Containing Resistors and Capacitors

### Learning Objectives

By the end of this section, you will be able to:

*   Explain the importance of the time constant, τ , and calculate the time constant for a given resistance and capacitance.
*   Explain why batteries in a flashlight gradually lose power and the light dims over time.
*   Describe what happens to a graph of the voltage across a capacitor over time as it charges.
*   Explain how a timing circuit works and list some applications.
*   Calculate the necessary speed of a strobe flash needed to “stop” the movement of an object over a particular length.

When you use a flash camera, it takes a few seconds to charge the capacitor that powers the flash. The light flash discharges the capacitor in a tiny fraction of a second. Why does charging take longer than discharging? This question and a number of other phenomena that involve charging and discharging capacitors are discussed in this module.

### _RC_ Circuits

An _RC_ circuit is one containing a resistor _R_ and a capacitor _C_. The capacitor is an electrical component that stores electric charge.

[Figure 21.37](21-6-dc-circuits-containing-resistors-and-capacitors#import-auto-id1907896) shows a simple _RC_ circuit that employs a DC (direct current) voltage source. The capacitor is initially uncharged. As soon as the switch is closed, current flows to and from the initially uncharged capacitor. As charge increases on the capacitor plates, there is increasing opposition to the flow of charge by the repulsion of like charges on each plate.

In terms of voltage, this is because voltage across the capacitor is given by Vc\=Q/CVc\=Q/C, where QQ is the amount of charge stored on each plate and CC is the capacitance. This voltage opposes the battery, growing from zero to the maximum emf when fully charged. The current thus decreases from its initial value of I0\=emfRI0\=emfR to zero as the voltage on the capacitor reaches the same value as the emf. When there is no current, there is no IRIR drop, and so the voltage on the capacitor must then equal the emf of the voltage source. This can also be explained with Kirchhoff’s second rule (the loop rule), discussed in [Kirchhoff’s Rules](21-3-kirchhoffs-rules), which says that the algebraic sum of changes in potential around any closed loop must be zero.

The initial current is I0\=emfRI0\=emfR, because all of the IRIR drop is in the resistance. Therefore, the smaller the resistance, the faster a given capacitor will be charged. Note that the internal resistance of the voltage source is included in RR, as are the resistances of the capacitor and the connecting wires. In the flash camera scenario above, when the batteries powering the camera begin to wear out, their internal resistance rises, reducing the current and lengthening the time it takes to get ready for the next flash.

![Part a shows a circuit with a cell of e m f script E connected in series with a resistor R, a capacitor C, and a switch to close the circuit. The current is shown flowing in a clockwise direction. The capacitor plates are shown to have a charge positive q and negative q respectively. Part b shows a graph of the variation of voltage of the capacitor with time. The voltage is plotted along the vertical axis and the time is along the horizontal axis. The graph shows a smooth upward rising curve which approaches a maximum and flattens out at maximum voltage equal to e m f script E over time.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/c65725f1ccf1e29b45031c887aa601a9390ffba5)

Figure 21.37 (a) An RCRC circuit with an initially uncharged capacitor. Current flows in the direction shown (opposite of electron flow) as soon as the switch is closed. Mutual repulsion of like charges in the capacitor progressively slows the flow as the capacitor is charged, stopping the current when the capacitor is fully charged and Q\=C⋅emfQ\=C⋅emf. (b) A graph of voltage across the capacitor versus time, with the switch closing at time t\=0t\=0. (Note that in the two parts of the figure, the capital script E stands for emf, qq stands for the charge stored on the capacitor, and ττ is the RCRC time constant.)

Voltage on the capacitor is initially zero and rises rapidly at first, since the initial current is a maximum. [Figure 21.37](21-6-dc-circuits-containing-resistors-and-capacitors#import-auto-id1907896)(b) shows a graph of capacitor voltage versus time (tt) starting when the switch is closed at t\=0t\=0. The voltage approaches emf asymptotically, since the closer it gets to emf the less current flows. The equation for voltage versus time when charging a capacitor CC through a resistor RR, derived using calculus, is

V\=emf(1−e−t/RC) (charging),V\=emf(1−e−t/RC) (charging),

21.77

where VV is the voltage across the capacitor, emf is equal to the emf of the DC voltage source, and the exponential e = 2.718 … is the base of the natural logarithm. Note that the units of RCRC are seconds. We define

τ\=RC,τ\=RC,

21.78

where ττ (the Greek letter tau) is called the time constant for an RCRC circuit. As noted before, a small resistance RR allows the capacitor to charge faster. This is reasonable, since a larger current flows through a smaller resistance. It is also reasonable that the smaller the capacitor CC, the less time needed to charge it. Both factors are contained in τ\=RCτ\=RC.

More quantitatively, consider what happens when t\=τ\=RCt\=τ\=RC. Then the voltage on the capacitor is

V\=emf1−e−1\=emf1−0.368\=0.632⋅emf.V\=emf1−e−1\=emf1−0.368\=0.632⋅emf.

21.79

This means that in the time τ\=RCτ\=RC, the voltage rises to 0.632 of its final value. The voltage will rise 0.632 of the remainder in the next time ττ. It is a characteristic of the exponential function that the final value is never reached, but 0.632 of the remainder to that value is achieved in every time, ττ. In just a few multiples of the time constant ττ, then, the final value is very nearly achieved, as the graph in [Figure 21.37](21-6-dc-circuits-containing-resistors-and-capacitors#import-auto-id1907896)(b) illustrates.

### Discharging a Capacitor

Discharging a capacitor through a resistor proceeds in a similar fashion, as [Figure 21.38](21-6-dc-circuits-containing-resistors-and-capacitors#import-auto-id3397057) illustrates. Initially, the current is I0\=V0RI0\=V0R, driven by the initial voltage V0V0 on the capacitor. As the voltage decreases, the current and hence the rate of discharge decreases, implying another exponential formula for VV. Using calculus, the voltage VV on a capacitor CC being discharged through a resistor RR is found to be

V\=V0e−t/RC (discharging).V\=V0e−t/RC (discharging).

21.80

![Part a shows a circuit with a capacitor C connected in series with a resistor R and a switch to close the circuit. The current is shown flowing in a counterclockwise direction. The capacitor plates are shown to have a charge positive q and negative q respectively. Part b shows a graph of the variation of voltage across the capacitor with time. The voltage is plotted along the vertical axis and the time is along the horizontal axis. The graph shows a smooth downward falling curve which approaches a minimum and flattens out close to zero over time.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/c08f2ca58c02fabf675dc394d3cc8b7a57c82e84)

Figure 21.38 (a) Closing the switch discharges the capacitor CC through the resistor RR. Mutual repulsion of like charges on each plate drives the current. (b) A graph of voltage across the capacitor versus time, with V \= V 0 V \= V 0 at t\=0t\=0. The voltage decreases exponentially, falling a fixed fraction of the way to zero in each subsequent time constant ττ.

The graph in [Figure 21.38](21-6-dc-circuits-containing-resistors-and-capacitors#import-auto-id3397057)(b) is an example of this exponential decay. Again, the time constant is τ\=RCτ\=RC. A small resistance RR allows the capacitor to discharge in a small time, since the current is larger. Similarly, a small capacitance requires less time to discharge, since less charge is stored. In the first time interval τ\=RCτ\=RC after the switch is closed, the voltage falls to 0.368 of its initial value, since V\=V0⋅e−1\=0.368V0V\=V0⋅e−1\=0.368V0.

During each successive time ττ, the voltage falls to 0.368 of its preceding value. In a few multiples of ττ, the voltage becomes very close to zero, as indicated by the graph in [Figure 21.38](21-6-dc-circuits-containing-resistors-and-capacitors#import-auto-id3397057)(b).

Now we can explain why the flash camera in our scenario takes so much longer to charge than discharge; the resistance while charging is significantly greater than while discharging. The internal resistance of the battery accounts for most of the resistance while charging. As the battery ages, the increasing internal resistance makes the charging process even slower. (You may have noticed this.)

The flash discharge is through a low-resistance ionized gas in the flash tube and proceeds very rapidly. Flash photographs, such as in [Figure 21.39](21-6-dc-circuits-containing-resistors-and-capacitors#import-auto-id2691569), can capture a brief instant of a rapid motion because the flash can be less than a microsecond in duration. Such flashes can be made extremely intense.

During World War II, nighttime reconnaissance photographs were made from the air with a single flash illuminating more than a square kilometer of enemy territory. The brevity of the flash eliminated blurring due to the surveillance aircraft’s motion. Today, an important use of intense flash lamps is to pump energy into a laser. The short intense flash can rapidly energize a laser and allow it to reemit the energy in another form.

![In the photograph, details of the fast beating wings of the hummingbird taking nectar from a flower have been caught in focus, instead of the blur that our eyes would see in real time.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/a0a0640361794dbcd2993c02a86e3b259d35a387)

Figure 21.39 This stop-motion photograph of a rufous hummingbird (_Selasphorus rufus_) feeding on a flower was obtained with an extremely brief and intense flash of light powered by the discharge of a capacitor through a gas. (credit: Dean E. Biggins, U.S. Fish and Wildlife Service)

#### Integrated Concept Problem: Calculating Capacitor Size—Strobe Lights

High-speed flash photography was pioneered by Doc Edgerton in the 1930s, while he was a professor of electrical engineering at MIT. You might have seen examples of his work in the amazing shots of hummingbirds in motion, a drop of milk splattering on a table, or a bullet penetrating an apple (see [Figure 21.39](21-6-dc-circuits-containing-resistors-and-capacitors#import-auto-id2691569)). To stop the motion and capture these pictures, one needs a high-intensity, very short pulsed flash, as mentioned earlier in this module.

Suppose one wished to capture the picture of a bullet (moving at 5.0×102m/s5.0×102m/s) that was passing through an apple. The duration of the flash is related to the RCRC time constant, ττ. What size capacitor would one need in the RCRC circuit to succeed, if the resistance of the flash tube was 10.0 Ω10.0 Ω? Assume the apple is a sphere with a diameter of 8.0×10–2m.8.0×10–2m.

#### Strategy

We begin by identifying the physical principles involved. This example deals with the strobe light, as discussed above. [Figure 21.38](21-6-dc-circuits-containing-resistors-and-capacitors#import-auto-id3397057) shows the circuit for this probe. The characteristic time ττ of the strobe is given as τ\=RCτ\=RC.

#### Solution

We wish to find CC, but we don’t know ττ. We want the flash to be on only while the bullet traverses the apple. So we need to use the kinematic equations that describe the relationship between distance xx, velocity vv, and time tt:

x\=vtort\=xv.x\=vtort\=xv.

21.81

The bullet’s velocity is given as 5.0×102m/s5.0×102m/s, and the distance xx is 8.0×10–2m.8.0×10–2m. The traverse time, then, is

t\=xv\=8.0×10–2m5.0×102m/s\=1.6×10−4s.t\=xv\=8.0×10–2m5.0×102m/s\=1.6×10−4s.

21.82

We set this value for the crossing time tt equal to ττ. Therefore,

C\=tR\=1.6×10−4s10.0 Ω\=16μF.C\=tR\=1.6×10−4s10.0 Ω\=16μF.

21.83

(Note: Capacitance CC is typically measured in farads, F F, defined as Coulombs per volt. From the equation, we see that CC can also be stated in units of seconds per ohm.)

#### Discussion

The flash interval of 160 μs160 μs (the traverse time of the bullet) is relatively easy to obtain today. Strobe lights have opened up new worlds from science to entertainment. The information from the picture of the apple and bullet was used in the Warren Commission Report on the assassination of President John F. Kennedy in 1963 to confirm that only one bullet was fired.

### _RC_ Circuits for Timing

RCRC circuits are commonly used for timing purposes. A mundane example of this is found in the ubiquitous intermittent wiper systems of modern cars. The time between wipes is varied by adjusting the resistance in an RCRC circuit. Another example of an RCRC circuit is found in novelty jewelry, Halloween costumes, and various toys that have battery-powered flashing lights. (See [Figure 21.40](21-6-dc-circuits-containing-resistors-and-capacitors#import-auto-id2056751) for a timing circuit.)

A more crucial use of RCRC circuits for timing purposes is in the artificial pacemaker, used to control heart rate. The heart rate is normally controlled by electrical signals generated by the sino-atrial (SA) node, which is on the wall of the right atrium chamber. This causes the muscles to contract and pump blood. Sometimes the heart rhythm is abnormal and the heartbeat is too high or too low.

The artificial pacemaker is inserted near the heart to provide electrical signals to the heart when needed with the appropriate time constant. Pacemakers have sensors that detect body motion and breathing to increase the heart rate during exercise to meet the body’s increased needs for blood and oxygen.

![Part a shows a charging circuit containing cell of e m f script E connected to a resistor R and capacitor C and a closed switch to complete the circuit. The current is shown to flow clockwise through this arm of the circuit alone. A bulb of high resistance R is connected across the capacitor. Part b shows a discharging circuit containing a cell of e m f script E connected to a resistor R and capacitor C and a closed switch to complete the circuit. A bulb of low resistance R is connected across the capacitor. Current flows clockwise through the arm containing the capacitor and the low resistance bulb. Part c is a graph showing variation of voltage verses time for the bulb in above circuit. The voltage is plotted along the vertical axis and the time is plotted along the horizontal axis. The curve has a smooth rise from the origin, reaches a plateau at threshold value of voltage where it begins to drop and rise as a small sawtooth wave with maxima lying along the threshold line.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/150a7ffb8c6f979080635a4da36fff4464039977)

Figure 21.40 (a) The lamp in this RCRC circuit ordinarily has a very high resistance, so that the battery charges the capacitor as if the lamp were not there. When the voltage reaches a threshold value, a current flows through the lamp that dramatically reduces its resistance, and the capacitor discharges through the lamp as if the battery and charging resistor were not there. Once discharged, the process starts again, with the flash period determined by the RCRC constant ττ. (b) A graph of voltage versus time for this circuit.

#### Calculating Time: _RC_ Circuit in a Heart Defibrillator

A heart defibrillator is used to resuscitate an accident victim by discharging a capacitor through the trunk of her body. A simplified version of the circuit is seen in [Figure 21.38](21-6-dc-circuits-containing-resistors-and-capacitors#import-auto-id3397057). (a) What is the time constant if an 8.00-μF8.00-μF capacitor is used and the path resistance through her body is 1.00×103Ω1.00×103Ω? (b) If the initial voltage is 10.0 kV, how long does it take to decline to 5.00×102V5.00×102V?

#### Strategy

Since the resistance and capacitance are given, it is straightforward to multiply them to give the time constant asked for in part (a). To find the time for the voltage to decline to 5.00×102V5.00×102V, we repeatedly multiply the initial voltage by 0.368 until a voltage less than or equal to 5.00×102V5.00×102V is obtained. Each multiplication corresponds to a time of ττ seconds.

#### Solution for (a)

The time constant ττ is given by the equation τ\=RCτ\=RC. Entering the given values for resistance and capacitance (and remembering that units for a farad can be expressed as s/Ωs/Ω) gives

τ\=RC\=(1.00× 10 3 Ω)(8.00μF)\=8.00ms.τ\=RC\=(1.00× 10 3 Ω)(8.00μF)\=8.00ms.

21.84

#### Solution for (b)

In the first 8.00 ms, the voltage (10.0 kV) declines to 0.368 of its initial value. That is:

V\=0.368V0\= 3.680×103 V at t\=8.00ms.V\=0.368V0\= 3.680×103 V at t\=8.00ms.

21.85

(Notice that we carry an extra digit for each intermediate calculation.) After another 8.00 ms, we multiply by 0.368 again, and the voltage is

V ′ \= 0.368 V \= 0.368 3.680 × 10 3 V \= 1.354 × 10 3 V at t \= 16.0 ms. V ′ \= 0.368 V \= 0.368 3.680 × 10 3 V \= 1.354 × 10 3 V at t \= 16.0 ms.

21.86

Similarly, after another 8.00 ms, the voltage is

V ′′ \= 0.368 V ′ \= ( 0.368 ) ( 1.354 × 10 3 V ) \= 498 V at t \= 24 .0 ms. V ′′ \= 0.368 V ′ \= ( 0.368 ) ( 1.354 × 10 3 V ) \= 498 V at t \= 24 .0 ms.

21.87

#### Discussion

So after only 24.0 ms, the voltage is down to 498 V, or 4.98% of its original value.Such brief times are useful in heart defibrillation, because the brief but intense current causes a brief but effective contraction of the heart. The actual circuit in a heart defibrillator is slightly more complex than the one in [Figure 21.38](21-6-dc-circuits-containing-resistors-and-capacitors#import-auto-id3397057), to compensate for magnetic and AC effects that will be covered in [Magnetism](22-1-magnets).

When is the potential difference across a capacitor an emf?

#### Solution

Only when the current being drawn from or put into the capacitor is zero. Capacitors, like batteries, have internal resistance, so their output voltage is not an emf unless current is zero. This is difficult to measure in practice so we refer to a capacitor’s voltage rather than its emf. But the source of potential difference in a capacitor is fundamental and it is an emf.

#### Circuit Construction Kit (DC only)

An electronics kit in your computer! Build circuits with resistors, light bulbs, batteries, and switches. Take measurements with the realistic ammeter and voltmeter. View the circuit as a schematic diagram, or switch to a life-like view.

[Access multimedia content](http://openstax.org/books/college-physics-2e/pages/21-6-dc-circuits-containing-resistors-and-capacitors)
# 21.5 Null Measurements

[Original URL](https://openstax.org/books/college-physics-2e/pages/21-5-null-measurements)

## 21.5 Null Measurements

### Learning Objectives

By the end of this section, you will be able to:

*   Explain why a null measurement device is more accurate than a standard voltmeter or ammeter.
*   Demonstrate how a Wheatstone bridge can be used to accurately calculate the resistance in a circuit.

Standard measurements of voltage and current alter the circuit being measured, introducing uncertainties in the measurements. Voltmeters draw some extra current, whereas ammeters reduce current flow. Null measurements balance voltages so that there is no current flowing through the measuring device and, therefore, no alteration of the circuit being measured.

Null measurements are generally more accurate but are also more complex than the use of standard voltmeters and ammeters, and they still have limits to their precision. In this module, we shall consider a few specific types of null measurements, because they are common and interesting, and they further illuminate principles of electric circuits.

### The Potentiometer

Suppose you wish to measure the emf of a battery. Consider what happens if you connect the battery directly to a standard voltmeter as shown in [Figure 21.33](21-5-null-measurements#import-auto-id2691925). (Once we note the problems with this measurement, we will examine a null measurement that improves accuracy.) As discussed before, the actual quantity measured is the terminal voltage VV, which is related to the emf of the battery by V\=emf−IrV\=emf−Ir, where II is the current that flows and rr is the internal resistance of the battery.

The emf could be accurately calculated if rr were very accurately known, but it is usually not. If the current II could be made zero, then V\=emfV\=emf, and so emf could be directly measured. However, standard voltmeters need a current to operate; thus, another technique is needed.

![The diagram shows equivalence between two circuits. The first circuit has a cell of e m f script E and an internal resistance r connected across a voltmeter. The equivalent circuit on the right shows the same cell of e m f script E and an internal resistance r connected across a series combination of a galvanometer with an internal resistance r sub G and high resistance R. The currents in the two circuits are shown to be equal.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/bd3dd570baa3896c8caf2b3ba52fe76e03478452)

Figure 21.33 An analog voltmeter attached to a battery draws a small but nonzero current and measures a terminal voltage that differs from the emf of the battery. (Note that the script capital E symbolizes electromotive force, or emf.) Since the internal resistance of the battery is not known precisely, it is not possible to calculate the emf precisely.

A potentiometer is a null measurement device for measuring potentials (voltages). (See [Figure 21.34](21-5-null-measurements#import-auto-id3170075).) A voltage source is connected to a resistor R,R, say, a long wire, and passes a constant current through it. There is a steady drop in potential (an IRIR drop) along the wire, so that a variable potential can be obtained by making contact at varying locations along the wire.

[Figure 21.34](21-5-null-measurements#import-auto-id3170075)(b) shows an unknown emfxemfx (represented by script ExEx in the figure) connected in series with a galvanometer. Note that emfxemfx opposes the other voltage source. The location of the contact point (see the arrow on the drawing) is adjusted until the galvanometer reads zero. When the galvanometer reads zero, emfx\=IRxemfx\=IRx, where RxRx is the resistance of the section of wire up to the contact point. Since no current flows through the galvanometer, none flows through the unknown emf, and so emfxemfx is directly sensed.

Now, a very precisely known standard emfsemfs is substituted for emfxemfx, and the contact point is adjusted until the galvanometer again reads zero, so that emfs\=IRsemfs\=IRs. In both cases, no current passes through the galvanometer, and so the current II through the long wire is the same. Upon taking the ratio emfxemfs emfxemfs, II cancels, giving

emfxemfs\=IRxIRs\=RxRs.emfxemfs\=IRxIRs\=RxRs.

21.71

Solving for emfxemfx gives

emfx\=emfsRxRs.emfx\=emfsRxRs.

21.72

![Two circuits are shown. The first circuit has a cell of e m f script E and internal resistance r connected in series to a resistor R. The second diagram shows the same circuit with the addition of a galvanometer and unknown voltage source connected with a variable contact that can be adjusted up and down the length of the resistor R.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/77fb1abf14246a866559824eb473a967facd11c7)

Figure 21.34 The potentiometer, a null measurement device. (a) A voltage source connected to a long wire resistor passes a constant current II through it. (b) An unknown emf (labeled script ExEx in the figure) is connected as shown, and the point of contact along RR is adjusted until the galvanometer reads zero. The segment of wire has a resistance RxRx and script Ex\=IRxEx\=IRx, where II is unaffected by the connection since no current flows through the galvanometer. The unknown emf is thus proportional to the resistance of the wire segment.

Because a long uniform wire is used for RR, the ratio of resistances Rx/RsRx/Rs is the same as the ratio of the lengths of wire that zero the galvanometer for each emf. The three quantities on the right-hand side of the equation are now known or measured, and emfxemfx can be calculated. The uncertainty in this calculation can be considerably smaller than when using a voltmeter directly, but it is not zero. There is always some uncertainty in the ratio of resistances Rx/RsRx/Rs and in the standard emfsemfs. Furthermore, it is not possible to tell when the galvanometer reads exactly zero, which introduces error into both RxRx and RsRs, and may also affect the current II.

### Resistance Measurements and the Wheatstone Bridge

There is a variety of so-called ohmmeters that purport to measure resistance. What the most common ohmmeters actually do is to apply a voltage to a resistance, measure the current, and calculate the resistance using Ohm’s law. Their readout is this calculated resistance. Two configurations for ohmmeters using standard voltmeters and ammeters are shown in [Figure 21.35](21-5-null-measurements#import-auto-id3027669). Such configurations are limited in accuracy, because the meters alter both the voltage applied to the resistor and the current that flows through it.

![The diagram shows two circuits. The first one has a cell of e m f script E and internal resistance r connected in series to an ammeter A and a resistor R. The second circuit is the same as the first, but in addition there is a voltmeter connected across the voltage source E.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/6c8f0f536846040b24df0ae87e9893f42f97f9d0)

Figure 21.35 Two methods for measuring resistance with standard meters. (a) Assuming a known voltage for the source, an ammeter measures current, and resistance is calculated as R\=VIR\=VI. (b) Since the terminal voltage VV varies with current, it is better to measure it. VV is most accurately known when II is small, but II itself is most accurately known when it is large.

The Wheatstone bridge is a null measurement device for calculating resistance by balancing potential drops in a circuit. (See [Figure 21.36](21-5-null-measurements#import-auto-id2446499).) The device is called a bridge because the galvanometer forms a bridge between two branches. A variety of bridge devices are used to make null measurements in circuits.

Resistors R1R1 and R2R2 are precisely known, while the arrow through R3R3 indicates that it is a variable resistance. The value of R3R3 can be precisely read. With the unknown resistance RxRx in the circuit, R3R3 is adjusted until the galvanometer reads zero. The potential difference between points b and d is then zero, meaning that b and d are at the same potential. With no current running through the galvanometer, it has no effect on the rest of the circuit. So the branches abc and adc are in parallel, and each branch has the full voltage of the source. That is, the IRIR drops along abc and adc are the same. Since b and d are at the same potential, the IRIR drop along ad must equal the IRIR drop along ab. Thus,

I1R1\=I2R3.I1R1\=I2R3.

21.73

Again, since b and d are at the same potential, the IRIR drop along dc must equal the IRIR drop along bc. Thus,

I1R2\=I2Rx.I1R2\=I2Rx.

21.74

Taking the ratio of these last two expressions gives

I1R1I1R2\=I2R3I2Rx.I1R1I1R2\=I2R3I2Rx.

21.75

Canceling the currents and solving for Rx yields

Rx\=R3R2R1.Rx\=R3R2R1.

21.76

![This complex circuit diagram shows a galvanometer connected in the center arm of a Wheatstone bridge arrangement. All the other four arms have a resistor. The bridge is connected to a cell of e m f script E and internal resistance r.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/8fab3114befef55d4047d5226b3b46c4c0c56770)

Figure 21.36 The Wheatstone bridge is used to calculate unknown resistances. The variable resistance R3R3 is adjusted until the galvanometer reads zero with the switch closed. This simplifies the circuit, allowing RxRx to be calculated based on the IRIR drops as discussed in the text.

This equation is used to calculate the unknown resistance when current through the galvanometer is zero. This method can be very accurate (often to four significant digits), but it is limited by two factors. First, it is not possible to get the current through the galvanometer to be exactly zero. Second, there are always uncertainties in R1R1, R2R2, and R3R3, which contribute to the uncertainty in RxRx.

Identify other factors that might limit the accuracy of null measurements. Would the use of a digital device that is more sensitive than a galvanometer improve the accuracy of null measurements?

#### Solution

One factor would be resistance in the wires and connections in a null measurement. These are impossible to make zero, and they can change over time. Another factor would be temperature variations in resistance, which can be reduced but not completely eliminated by choice of material. Digital devices sensitive to smaller currents than analog devices do improve the accuracy of null measurements because they allow you to get the current closer to zero.
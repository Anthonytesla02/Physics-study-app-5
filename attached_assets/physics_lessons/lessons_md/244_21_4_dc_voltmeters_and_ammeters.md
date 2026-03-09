# 21.4 DC Voltmeters and Ammeters

[Original URL](https://openstax.org/books/college-physics-2e/pages/21-4-dc-voltmeters-and-ammeters)

## 21.4 DC Voltmeters and Ammeters

### Learning Objectives

By the end of this section, you will be able to:

*   Explain why a voltmeter must be connected in parallel with the circuit.
*   Draw a diagram showing an ammeter correctly connected in a circuit.
*   Describe how a galvanometer can be used as either a voltmeter or an ammeter.
*   Find the resistance that must be placed in series with a galvanometer to allow it to be used as a voltmeter with a given reading.
*   Explain why measuring the voltage or current in a circuit can never be exact.

Voltmeters measure voltage, whereas ammeters measure current. Some of the meters in automobile dashboards, digital cameras, cell phones, and tuner-amplifiers are voltmeters or ammeters. (See [Figure 21.26](21-4-dc-voltmeters-and-ammeters#import-auto-id2654311).) The internal construction of the simplest of these meters and how they are connected to the system they monitor give further insight into applications of series and parallel connections.

![This photograph shows the instruments on a gray Volkswagen Vento dashboard, including the speedometer, odometer, and fuel and temperature gauges, showing some readings.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/d35caea9078b49f40477dc5109bb9847c36838ed)

Figure 21.26 The fuel and temperature gauges (far right and far left, respectively) in this 1996 Volkswagen are voltmeters that register the voltage output of “sender” units, which are hopefully proportional to the amount of gasoline in the tank and the engine temperature. (credit: Christian Giersing)

Voltmeters are connected in parallel with whatever device’s voltage is to be measured. A parallel connection is used because objects in parallel experience the same potential difference. (See [Figure 21.27](21-4-dc-voltmeters-and-ammeters#import-auto-id1934441), where the voltmeter is represented by the symbol V.)

Ammeters are connected in series with whatever device’s current is to be measured. A series connection is used because objects in series have the same current passing through them. (See [Figure 21.28](21-4-dc-voltmeters-and-ammeters#import-auto-id2692802), where the ammeter is represented by the symbol A.)

![Part a shows a schematic drawing of a circuit with a voltage source and its internal resistance, in series with two load resistors R sub one and R sub two having two probes of a voltmeter connected in parallel with each component. There is another resistor in series to close the circuit. Part b shows a photograph of a black voltmeter connected to two inputs on an electrical device, with a digital readout of the voltage across the source as an L E D display.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/ea56f6d53d44fd814fd461d8fa299f03f344cd91)

Figure 21.27 (a) To measure potential differences in this series circuit, the voltmeter (V) is placed in parallel with the voltage source or either of the resistors. Note that terminal voltage is measured between points a and b. It is not possible to connect the voltmeter directly across the emf without including its internal resistance, rr. (b) A digital voltmeter in use. (credit: Messtechniker, Wikimedia Commons)

![The diagram of an electric circuit shows a voltage source of e m f script E and internal resistance r and two resistive loads R sub one and R sub two. All are connected in series with an ammeter A.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/a9196bbcbf7a5479d34015162d04ffb0135ac31d)

Figure 21.28 An ammeter (A) is placed in series to measure current. All of the current in this circuit flows through the meter. The ammeter would have the same reading if located between points d and e or between points f and a as it does in the position shown. (Note that the script capital E stands for emf, and rr stands for the internal resistance of the source of potential difference.)

### Analog Meters: Galvanometers

Analog meters have a needle that swivels to point at numbers on a scale, as opposed to digital meters, which have numerical readouts similar to a hand-held calculator. The heart of most analog meters is a device called a galvanometer, denoted by G. Current flow through a galvanometer, IGIG, produces a proportional needle deflection. (This deflection is due to the force of a magnetic field upon a current-carrying wire.)

The two crucial characteristics of a given galvanometer are its resistance and current sensitivity. Current sensitivity is the current that gives a full-scale deflection of the galvanometer’s needle, the maximum current that the instrument can measure. For example, a galvanometer with a current sensitivity of 50 μA50 μA has a maximum deflection of its needle when 50 μA50 μA flows through it, reads half-scale when 25 μA25 μA flows through it, and so on.

If such a galvanometer has a 25-Ω25-Ω resistance, then a voltage of only V\=IR\=50 μA25 Ω\=1.25 mVV\=IR\=50 μA25 Ω\=1.25 mV produces a full-scale reading. By connecting resistors to this galvanometer in different ways, you can use it as either a voltmeter or ammeter that can measure a broad range of voltages or currents.

#### Galvanometer as Voltmeter

[Figure 21.29](21-4-dc-voltmeters-and-ammeters#import-auto-id1404084) shows how a galvanometer can be used as a voltmeter by connecting it in series with a large resistance, RR. The value of the resistance RR is determined by the maximum voltage to be measured. Suppose you want 10 V to produce a full-scale deflection of a voltmeter containing a 25-Ω25-Ω galvanometer with a 50-μA50-μA sensitivity. Then 10 V applied to the meter must produce a current of 50 μA50 μA. The total resistance must be

Rtot\=R+r\=VI\=10 V50 μA\=200 kΩ, orRtot\=R+r\=VI\=10 V50 μA\=200 kΩ, or

21.68

R\=Rtot−r\=200 kΩ−25Ω≈200 kΩ.R\=Rtot−r\=200 kΩ−25Ω≈200 kΩ.

21.69

(RR is so large that the galvanometer resistance, rr, is nearly negligible.) Note that 5 V applied to this voltmeter produces a half-scale deflection by producing a 25-μA25-μA current through the meter, and so the voltmeter’s reading is proportional to voltage as desired.

This voltmeter would not be useful for voltages less than about half a volt, because the meter deflection would be small and difficult to read accurately. For other voltage ranges, other resistances are placed in series with the galvanometer. Many meters have a choice of scales. That choice involves switching an appropriate resistance into series with the galvanometer.

![The drawing shows a voltmeter, which is a circuit with a large resistance in series with a galvanometer, along with its internal resistance.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/9e349aa17dcd8fb08106c71fcbafef339a256f1b)

Figure 21.29 A large resistance RR placed in series with a galvanometer G produces a voltmeter, the full-scale deflection of which depends on the choice of RR. The larger the voltage to be measured, the larger RR must be. (Note that rr represents the internal resistance of the galvanometer.)

#### Galvanometer as Ammeter

The same galvanometer can also be made into an ammeter by placing it in parallel with a small resistance RR, often called the shunt resistance, as shown in [Figure 21.30](21-4-dc-voltmeters-and-ammeters#import-auto-id2932271). Since the shunt resistance is small, most of the current passes through it, allowing an ammeter to measure currents much greater than those producing a full-scale deflection of the galvanometer.

Suppose, for example, an ammeter is needed that gives a full-scale deflection for 1.0 A, and contains the same 25-Ω25-Ω galvanometer with its 50-μA50-μA sensitivity. Since RR and rr are in parallel, the voltage across them is the same.

These IRIR drops are IR\=IGrIR\=IGr so that IR\=IGI\=RrIR\=IGI\=Rr. Solving for RR, and noting that IGIG is 50 μA50 μA and II is 0.999950 A, we have

R\=rIGI\=(25Ω)50 μA0.999950 A\=1.25×10−3Ω.R\=rIGI\=(25Ω)50 μA0.999950 A\=1.25×10−3Ω.

21.70

![A resistance R is placed in parallel with a galvanometer G having an internal resistance r to produce an ammeter.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/090958a75e599f65d6f866a8fcd5e94044b11925)

Figure 21.30 A small shunt resistance RR placed in parallel with a galvanometer G produces an ammeter, the full-scale deflection of which depends on the choice of RR. The larger the current to be measured, the smaller RR must be. Most of the current (II) flowing through the meter is shunted through RR to protect the galvanometer. (Note that rr represents the internal resistance of the galvanometer.) Ammeters may also have multiple scales for greater flexibility in application. The various scales are achieved by switching various shunt resistances in parallel with the galvanometer—the greater the maximum current to be measured, the smaller the shunt resistance must be.

### Taking Measurements Alters the Circuit

When you use a voltmeter or ammeter, you are connecting another resistor to an existing circuit and, thus, altering the circuit. Ideally, voltmeters and ammeters do not appreciably affect the circuit, but it is instructive to examine the circumstances under which they do or do not interfere.

First, consider the voltmeter, which is always placed in parallel with the device being measured. Very little current flows through the voltmeter if its resistance is a few orders of magnitude greater than the device, and so the circuit is not appreciably affected. (See [Figure 21.31](21-4-dc-voltmeters-and-ammeters#import-auto-id2602156)(a).) (A large resistance in parallel with a small one has a combined resistance essentially equal to the small one.) If, however, the voltmeter’s resistance is comparable to that of the device being measured, then the two in parallel have a smaller resistance, appreciably affecting the circuit. (See [Figure 21.31](21-4-dc-voltmeters-and-ammeters#import-auto-id2602156)(b).) The voltage across the device is not the same as when the voltmeter is out of the circuit.

![Part a shows a desired case in which the resistance of a voltmeter connected in parallel with a load resistor is essentially equivalent to the resistance of the load resistor along as long as the voltmeter’s resistance is much greater than that of the load resistor. Part b shows the case when the voltmeter’s resistance is approximately the same as that of the load resistor. This case should be avoided because the effective resistance is half that of the load resistor.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/f0225aed0e3cb72aaafdaf18cd17eb6379f90e58)

Figure 21.31 (a) A voltmeter having a resistance much larger than the device (RVoltmeter\>>RRVoltmeter\>>R) with which it is in parallel produces a parallel resistance essentially the same as the device and does not appreciably affect the circuit being measured. (b) Here the voltmeter has the same resistance as the device (RVoltmeter≅RRVoltmeter≅R), so that the parallel resistance is half of what it is when the voltmeter is not connected. This is an example of a significant alteration of the circuit and is to be avoided.

An ammeter is placed in series in the branch of the circuit being measured, so that its resistance adds to that branch. Normally, the ammeter’s resistance is very small compared with the resistances of the devices in the circuit, and so the extra resistance is negligible. (See [Figure 21.32](21-4-dc-voltmeters-and-ammeters#import-auto-id1927668)(a).) However, if very small load resistances are involved, or if the ammeter is not as low in resistance as it should be, then the total series resistance is significantly greater, and the current in the branch being measured is reduced. (See [Figure 21.32](21-4-dc-voltmeters-and-ammeters#import-auto-id1927668)(b).)

A practical problem can occur if the ammeter is connected incorrectly. If it was put in parallel with the resistor to measure the current in it, you could possibly damage the meter; the low resistance of the ammeter would allow most of the current in the circuit to go through the galvanometer, and this current would be larger since the effective resistance is smaller.

![The figure shows two cases in which an ammeter is connected in series with a load resistor. Part a shows the desired case in which the resistance of the ammeter is much smaller than that of the load, and the total resistance is about the same as the load resistance. Part b shows the case to be avoided in which the ammeter has a resistance about the same as the load, and the total resistance is twice that of the load resistance.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/44323025d02cc7de71d51c321a462f1c2f4e4052)

Figure 21.32 (a) An ammeter normally has such a small resistance that the total series resistance in the branch being measured is not appreciably increased. The circuit is essentially unaltered compared with when the ammeter is absent. (b) Here the ammeter’s resistance is the same as that of the branch, so that the total resistance is doubled and the current is half what it is without the ammeter. This significant alteration of the circuit is to be avoided.

One solution to the problem of voltmeters and ammeters interfering with the circuits being measured is to use galvanometers with greater sensitivity. This allows construction of voltmeters with greater resistance and ammeters with smaller resistance than when less sensitive galvanometers are used.

There are practical limits to galvanometer sensitivity, but it is possible to get analog meters that make measurements accurate to a few percent. Note that the inaccuracy comes from altering the circuit, not from a fault in the meter.

Making a measurement alters the system being measured in a manner that produces uncertainty in the measurement. For macroscopic systems, such as the circuits discussed in this module, the alteration can usually be made negligibly small, but it cannot be eliminated entirely. For submicroscopic systems, such as atoms, nuclei, and smaller particles, measurement alters the system in a manner that cannot be made arbitrarily small. This actually limits knowledge of the system—even limiting what nature can know about itself. We shall see profound implications of this when the Heisenberg uncertainty principle is discussed in the modules on quantum mechanics.

There is another measurement technique based on drawing no current at all and, hence, not altering the circuit at all. These are called null measurements and are the topic of [Null Measurements](21-5-null-measurements). Digital meters that employ solid-state electronics and null measurements can attain accuracies of one part in 106106.

Digital meters are able to detect smaller currents than analog meters employing galvanometers. How does this explain their ability to measure voltage and current more accurately than analog meters?

#### Solution

Since digital meters require less current than analog meters, they alter the circuit less than analog meters. Their resistance as a voltmeter can be far greater than an analog meter, and their resistance as an ammeter can be far less than an analog meter. Consult [Figure 21.27](21-4-dc-voltmeters-and-ammeters#import-auto-id1934441) and [Figure 21.28](21-4-dc-voltmeters-and-ammeters#import-auto-id2692802) and their discussion in the text.

#### Circuit Construction Kit (DC Only), Virtual Lab

Construct the circuit shown and use the simulation’s voltmeter and ammeter to measure the current in the circuit and the voltage across each component.

[Access multimedia content](http://openstax.org/books/college-physics-2e/pages/21-4-dc-voltmeters-and-ammeters)
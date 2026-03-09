# 21.3 Kirchhoff’s Rules

[Original URL](https://openstax.org/books/college-physics-2e/pages/21-3-kirchhoffs-rules)

## 21.3 Kirchhoff’s Rules

### Learning Objectives

By the end of this section, you will be able to:

*   Analyze a complex circuit using Kirchhoff’s rules, using the conventions for determining the correct signs of various terms.

Many complex circuits, such as the one in [Figure 21.21](21-3-kirchhoffs-rules#import-auto-id1907339), cannot be analyzed with the series-parallel techniques developed in [Resistors in Series and Parallel](21-1-resistors-in-series-and-parallel) and [Electromotive Force: Terminal Voltage](21-2-electromotive-force-terminal-voltage). There are, however, two circuit analysis rules that can be used to analyze any circuit, simple or complex. These rules are special cases of the laws of conservation of charge and conservation of energy. The rules are known as Kirchhoff’s rules, after their inventor Gustav Kirchhoff (1824–1887).

![A complicated circuit diagram shows multiple resistances and voltage sources wired in series and in parallel. The circuit has three arms. The first has a cell of e m f script E sub one and internal resistance r sub one in series with a resistor R sub two. The second has a cell of e m f script E sub two and internal resistance r sub two in series with resistor R sub three. The third arm has a resistor R sub one. The three arms are connected in parallel.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/e6f12a27d44c75cc79cdba1901164ed2b1f8e059)

Figure 21.21 This circuit cannot be reduced to a combination of series and parallel connections. Kirchhoff’s rules, special applications of the laws of conservation of charge and energy, can be used to analyze it. (Note: The script E in the figure represents electromotive force, emf.)

*   Kirchhoff’s first rule—the junction rule. The sum of all currents entering a junction must equal the sum of all currents leaving the junction.
*   Kirchhoff’s second rule—the loop rule. The algebraic sum of changes in potential around any closed circuit path (loop) must be zero.

Explanations of the two rules will now be given, followed by problem-solving hints for applying Kirchhoff’s rules, and a worked example that uses them.

### Kirchhoff’s First Rule

Kirchhoff’s first rule (the junction rule) is an application of the conservation of charge to a junction; it is illustrated in [Figure 21.22](21-3-kirchhoffs-rules#import-auto-id2052595). Current is the flow of charge, and charge is conserved; thus, whatever charge flows into the junction must flow out. Kirchhoff’s first rule requires that I1\=I2+I3I1\=I2+I3 (see figure). Equations like this can and will be used to analyze circuits and to solve circuit problems.

Kirchhoff’s rules for circuit analysis are applications of conservation laws to circuits. The first rule is the application of conservation of charge, while the second rule is the application of conservation of energy. Conservation laws, even used in a specific application, such as circuit analysis, are so basic as to form the foundation of that application.

![This schematic drawing shows a T-junction, with one current I sub one flowing into the T and two currents I sub two and I sub three flowing out of the T junction.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/b72ed79e134c33ce47731fbbded620199bec1af8)

Figure 21.22 The junction rule. The diagram shows an example of Kirchhoff’s first rule where the sum of the currents into a junction equals the sum of the currents out of a junction. In this case, the current going into the junction splits and comes out as two currents, so that I1\=I2+I3I1\=I2+I3. Here I1I1 must be 11 A, since I2I2 is 7 A and I3I3 is 4 A.

### Kirchhoff’s Second Rule

Kirchhoff’s second rule (the loop rule) is an application of conservation of energy. The loop rule is stated in terms of potential, VV, rather than potential energy, but the two are related since PEelec\=qVPEelec\=qV. Recall that emf is the potential difference of a source when no current is flowing. In a closed loop, whatever energy is supplied by emf must be transferred into other forms by devices in the loop, since there are no other ways in which energy can be transferred into or out of the circuit. [Figure 21.23](21-3-kirchhoffs-rules#import-auto-id1024606) illustrates the changes in potential in a simple series circuit loop.

Kirchhoff’s second rule requires emf−Ir−IR1−IR2\=0emf−Ir−IR1−IR2\=0. Rearranged, this is emf\=Ir+IR1+IR2emf\=Ir+IR1+IR2, which means the emf equals the sum of the IRIR (voltage) drops in the loop.

![Part a shows a schematic of a simple circuit that has a voltage source in series with two load resistors. The voltage source has an e m f, labeled script E, of eighteen volts. The voltage drops are one volt across the internal resistance and twelve volts and five volts across the two load resistances. Part b is a perspective drawing corresponding to the circuit in part a. The charge is raised in potential by the e m f and lowered by the resistances.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/e8327af4698e8e3d2b828a32c7cb0de3b7195e0a)

Figure 21.23 The loop rule. An example of Kirchhoff’s second rule where the sum of the changes in potential around a closed loop must be zero. (a) In this standard schematic of a simple series circuit, the emf supplies 18 V, which is reduced to zero by the resistances, with 1 V across the internal resistance, and 12 V and 5 V across the two load resistances, for a total of 18 V. (b) This perspective view represents the potential as something like a roller coaster, where charge is raised in potential by the emf and lowered by the resistances. (Note that the script E stands for emf.)

### Applying Kirchhoff’s Rules

By applying Kirchhoff’s rules, we generate equations that allow us to find the unknowns in circuits. The unknowns may be currents, emfs, or resistances. Each time a rule is applied, an equation is produced. If there are as many independent equations as unknowns, then the problem can be solved. There are two decisions you must make when applying Kirchhoff’s rules. These decisions determine the signs of various quantities in the equations you obtain from applying the rules.

1.  When applying Kirchhoff’s first rule, the junction rule, you must label the current in each branch and decide in what direction it is going. For example, in [Figure 21.21](21-3-kirchhoffs-rules#import-auto-id1907339), [Figure 21.22](21-3-kirchhoffs-rules#import-auto-id2052595), and [Figure 21.23](21-3-kirchhoffs-rules#import-auto-id1024606), currents are labeled I1I1, I2I2, I3I3, and II, and arrows indicate their directions. There is no risk here, for if you choose the wrong direction, the current will be of the correct magnitude but negative.
2.  When applying Kirchhoff’s second rule, the loop rule, you must identify a closed loop and decide in which direction to go around it, clockwise or counterclockwise. For example, in [Figure 21.23](21-3-kirchhoffs-rules#import-auto-id1024606) the loop was traversed in the same direction as the current (clockwise). Again, there is no risk; going around the circuit in the opposite direction reverses the sign of every term in the equation, which is like multiplying both sides of the equation by –1.–1.

[Figure 21.24](21-3-kirchhoffs-rules#import-auto-id3116736) and the following points will help you get the plus or minus signs right when applying the loop rule. Note that the resistors and emfs are traversed by going from a to b. In many circuits, it will be necessary to construct more than one loop. In traversing each loop, one needs to be consistent for the sign of the change in potential. (See [Example 21.5](21-3-kirchhoffs-rules#fs-id3008416).)

![This figure shows four situations where current flows through either a resistor or a source, and the calculation of the potential change across each. The first two diagrams show the potential drop across a resistor, with the current flowing from left to right or right to left. The other two diagrams show a potential drop across a voltage source, when the terminals are in one orientation and then another.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/232b2a97022ebda68041ff5c257bda99081d8b1c)

Figure 21.24 Each of these resistors and voltage sources is traversed from a to b. The potential changes are shown beneath each element and are explained in the text. (Note that the script E stands for emf.)

*   When a resistor is traversed in the same direction as the current, the change in potential is −IR−IR. (See [Figure 21.24](21-3-kirchhoffs-rules#import-auto-id3116736).)
*   When a resistor is traversed in the direction opposite to the current, the change in potential is +IR+IR. (See [Figure 21.24](21-3-kirchhoffs-rules#import-auto-id3116736).)
*   When an emf is traversed from –– to + (the same direction it moves positive charge), the change in potential is +emf. (See [Figure 21.24](21-3-kirchhoffs-rules#import-auto-id3116736).)
*   When an emf is traversed from + to –– (opposite to the direction it moves positive charge), the change in potential is − − emf. (See [Figure 21.24](21-3-kirchhoffs-rules#import-auto-id3116736).)

#### Calculating Current: Using Kirchhoff’s Rules

Find the currents flowing in the circuit in [Figure 21.25](21-3-kirchhoffs-rules#import-auto-id2440725).

![The diagram shows a complex circuit with two voltage sources E sub one and E sub two and several resistive loads, wired in two loops and two junctions. Several points on the diagram are marked with letters a through h. The current in each branch is labeled separately.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/246064314e61c1db4cda388b79edd6500b18885c)

Figure 21.25 This circuit is similar to that in [Figure 21.21](21-3-kirchhoffs-rules#import-auto-id1907339), but the resistances and emfs are specified. (Each emf is denoted by script E.) The currents in each branch are labeled and assumed to move in the directions shown. This example uses Kirchhoff’s rules to find the currents.

#### Strategy

This circuit is sufficiently complex that the currents cannot be found using Ohm’s law and the series-parallel techniques—it is necessary to use Kirchhoff’s rules. Currents have been labeled I1I1, I2I2, and I3I3 in the figure and assumptions have been made about their directions. Locations on the diagram have been labeled with letters a through h. In the solution we will apply the junction and loop rules, seeking three independent equations to allow us to solve for the three unknown currents.

#### Solution

We begin by applying Kirchhoff’s first or junction rule at point a. This gives

I1\=I2+I3,I1\=I2+I3,

21.54

since I1I1 flows into the junction, while I2I2 and I3I3 flow out. Applying the junction rule at e produces exactly the same equation, so that no new information is obtained. This is a single equation with three unknowns—three independent equations are needed, and so the loop rule must be applied.

Now we consider the loop abcdea. Going from a to b, we traverse R2R2 in the same (assumed) direction of the current I2I2, and so the change in potential is −I2R2−I2R2. Then going from b to c, we go from –– to +, so that the change in potential is +emf1+emf1. Traversing the internal resistance r1r1 from c to d gives −I2r1−I2r1. Completing the loop by going from d to a again traverses a resistor in the same direction as its current, giving a change in potential of −I1R1−I1R1.

The loop rule states that the changes in potential sum to zero. Thus,

−I2R2+emf1−I2r1−I1R1\=−I2(R2+r1)+emf1−I1R1\=0.−I2R2+emf1−I2r1−I1R1\=−I2(R2+r1)+emf1−I1R1\=0.

21.55

Substituting values from the circuit diagram for the resistances and emf, and canceling the ampere unit gives

−3I2+18−6I1\=0.−3I2+18−6I1\=0.

21.56

Now applying the loop rule to aefgha (we could have chosen abcdefgha as well) similarly gives

+I1R1+I3R3+I3r2−emf2\= +I1R1+I3R3+r2−emf2\=0.+I1R1+I3R3+I3r2−emf2\= +I1R1+I3R3+r2−emf2\=0.

21.57

Note that the signs are reversed compared with the other loop, because elements are traversed in the opposite direction. With values entered, this becomes

+6I1+2I3−45\=0.+6I1+2I3−45\=0.

21.58

These three equations are sufficient to solve for the three unknown currents. First, solve the second equation for I2I2:

I2\=6−2I1.I2\=6−2I1.

21.59

Now solve the third equation for I3I3:

I3\=22.5−3I1.I3\=22.5−3I1.

21.60

Substituting these two new equations into the first one allows us to find a value for I1I1:

I1\=I2+I3\=(6−2I1)+(22.5− 3I1)\=28.5− 5I1.I1\=I2+I3\=(6−2I1)+(22.5− 3I1)\=28.5− 5I1.

21.61

Combining terms gives

6I1\=28.5, and6I1\=28.5, and

21.62

I1\=4.75 A.I1\=4.75 A.

21.63

Substituting this value for I1I1 back into the fourth equation gives

I 2 \= 6 − 2I 1 \= 6 − 9.50 I 2 \= 6 − 2I 1 \= 6 − 9.50

21.64

I2\=−3.50 A.I2\=−3.50 A.

21.65

The minus sign means I2I2 flows in the direction opposite to that assumed in [Figure 21.25](21-3-kirchhoffs-rules#import-auto-id2440725).

Finally, substituting the value for I1I1 into the fifth equation gives

I 3 \= 22.5 − 3I 1 \= 22.5 − 14 . 25 I 3 \= 22.5 − 3I 1 \= 22.5 − 14 . 25

21.66

I3\=8.25 A.I3\=8.25 A.

21.67

#### Discussion

Just as a check, we note that indeed I1\=I2+I3I1\=I2+I3. The results could also have been checked by entering all of the values into the equation for the abcdefgha loop.

1.  Make certain there is a clear circuit diagram on which you can label all known and unknown resistances, emfs, and currents. If a current is unknown, you must assign it a direction. This is necessary for determining the signs of potential changes. If you assign the direction incorrectly, the current will be found to have a negative value—no harm done.
2.  Apply the junction rule to any junction in the circuit. Each time the junction rule is applied, you should get an equation with a current that does not appear in a previous application—if not, then the equation is redundant.
3.  Apply the loop rule to as many loops as needed to solve for the unknowns in the problem. (There must be as many independent equations as unknowns.) To apply the loop rule, you must choose a direction to go around the loop. Then carefully and consistently determine the signs of the potential changes for each element using the four bulleted points discussed above in conjunction with [Figure 21.24](21-3-kirchhoffs-rules#import-auto-id3116736).
4.  Solve the simultaneous equations for the unknowns. This may involve many algebraic steps, requiring careful checking and rechecking.
5.  Check to see whether the answers are reasonable and consistent. The numbers should be of the correct order of magnitude, neither exceedingly large nor vanishingly small. The signs should be reasonable—for example, no resistance should be negative. Check to see that the values obtained satisfy the various equations obtained from applying the rules. The currents should satisfy the junction rule, for example.

The material in this section is correct in theory. We should be able to verify it by making measurements of current and voltage. In fact, some of the devices used to make such measurements are straightforward applications of the principles covered so far and are explored in the next modules. As we shall see, a very basic, even profound, fact results—making a measurement alters the quantity being measured.

Can Kirchhoff’s rules be applied to simple series and parallel circuits or are they restricted for use in more complicated circuits that are not combinations of series and parallel?

#### Solution

Kirchhoff's rules can be applied to any circuit since they are applications to circuits of two conservation laws. Conservation laws are the most broadly applicable principles in physics. It is usually mathematically simpler to use the rules for series and parallel in simpler circuits so we emphasize Kirchhoff’s rules for use in more complicated situations. But the rules for series and parallel can be derived from Kirchhoff’s rules. Moreover, Kirchhoff’s rules can be expanded to devices other than resistors and emfs, such as capacitors, and are one of the basic analysis devices in circuit analysis.
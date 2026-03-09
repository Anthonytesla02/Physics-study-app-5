# 15.5 Applications of Thermodynamics: Heat Pumps and Refrigerators

[Original URL](https://openstax.org/books/college-physics-2e/pages/15-5-applications-of-thermodynamics-heat-pumps-and-refrigerators)

## 15.5 Applications of Thermodynamics: Heat Pumps and Refrigerators

### Learning Objectives

By the end of this section, you will be able to:

*   Describe the use of heat engines in heat pumps and refrigerators.
*   Demonstrate how a heat pump works to warm an interior space.
*   Explain the differences between heat pumps and refrigerators.
*   Calculate a heat pump’s coefficient of performance.

![Photograph of various expensive refrigerators displayed in a home appliance store.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/1aa71d65080c8217d7fb844eaeb95f0b94fa3c1c)

Figure 15.25 Almost every home contains a refrigerator. Most people don’t realize they are also sharing their homes with a heat pump. (credit: Id1337x, Wikimedia Commons)

Heat pumps, air conditioners, and refrigerators utilize heat transfer from cold to hot. They are heat engines run backward. We say backward, rather than reverse, because except for Carnot engines, all heat engines, though they can be run backward, cannot truly be reversed. Heat transfer occurs from a cold reservoir QcQc and into a hot one. This requires work input WW, which is also converted to heat transfer. Thus the heat transfer to the hot reservoir is Qh\=Qc+WQh\=Qc+W. (Note that QhQh, QcQc, and WW are positive, with their directions indicated on schematics rather than by sign.) A heat pump’s mission is for heat transfer QhQh to occur into a warm environment, such as a home in the winter. The mission of air conditioners and refrigerators is for heat transfer QcQc to occur from a cool environment, such as chilling a room or keeping food at lower temperatures than the environment. (Actually, a heat pump can be used both to heat and cool a space. It is essentially an air conditioner and a heating unit all in one. In this section we will concentrate on its heating mode.)

![Part a of the figure shows a heat pump, drawn as a circle. Work W, indicated by a bold orange arrow, is put in to to the pump to transfer heat Q sub c, indicated by a bold orange arrow, out of a cold temperature reservoir T sub c, drawn as a blue rectangle, and pumps heat Q sub h, indicated by a larger bold orange arrow, into high temperature reservoir T sub h. Part b of the figure shows a P V diagram for a Carnot cycle. The pressure P is along the Y axis and the volume V is along the X axis. The graph shows a complete cycle A D C B A. The path begins at point A, then it drops sharply down and slightly to the right until point D. This is marked as an adiabatic expansion. Then the curve drops down more gradually, still to the right, from point D to point C. This is marked as an isotherm at temperature T sub c, during which heat Q sub c enters the system. The curve then rises from point C to point B along the direction opposite to that of A D. This is an adiabatic compression. The last part of the curve rises up from point B back to A. This is marked as an isotherm at temperature T sub h, during which heat Q sub h leaves the system. The path D C is lower than path B A. Heat entering and leaving the system is indicated by bold orange arrows, with Q sub h larger than Q sub c.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/42f156f9084026846ad0f1be9dac48c1c834d334)

Figure 15.26 Heat pumps, air conditioners, and refrigerators are heat engines operated backward. The one shown here is based on a Carnot (reversible) engine. (a) Schematic diagram showing heat transfer from a cold reservoir to a warm reservoir with a heat pump. The directions of **WW**, QhQh, and QcQc are opposite what they would be in a heat engine. (b) PVPV diagram for a Carnot cycle similar to that in [Figure 15.27](15-5-applications-of-thermodynamics-heat-pumps-and-refrigerators#import-auto-id1169737781193) but reversed, following path ADCBA. The area inside the loop is negative, meaning there is a net work input. There is heat transfer QcQc into the system from a cold reservoir along path DC, and heat transfer QhQh out of the system into a hot reservoir along path BA.

### Heat Pumps

The great advantage of using a heat pump to keep your home warm, rather than just burning fuel, is that a heat pump supplies Qh\=Qc+WQh\=Qc+W. Heat transfer is from the outside air, even at a temperature below freezing, to the indoor space. You only pay for WW, and you get an additional heat transfer of QcQc from the outside at no cost; in many cases, at least twice as much energy is transferred to the heated space as is used to run the heat pump. When you burn fuel to keep warm, you pay for all of it. The disadvantage is that the work input (required by the second law of thermodynamics) is sometimes more expensive than simply burning fuel, especially if the work is done by electrical energy.

The basic components of a heat pump in its heating mode are shown in [Figure 15.27](15-5-applications-of-thermodynamics-heat-pumps-and-refrigerators#import-auto-id1169737781193). A working fluid such as a non-CFC refrigerant is used. In the outdoor coils (the evaporator), heat transfer QcQc occurs to the working fluid from the cold outdoor air, turning it into a gas.

![The diagram shows a diagram of a heat pump. There are four components connected by pipes. They are a condenser (1), an expansion valve (2), an evaporator (3), and a compressor (4), connected in that order. The evaporator coils are outside; all of the other components are inside. Heat Q sub c is absorbed from the outside air at the evaporator, and heat Q sub h is emitted inside from the condenser.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/f9d13d7e8e5336cb2eb2b512c33e5b8c98fba649)

Figure 15.27 A simple heat pump has four basic components: (1) condenser, (2) expansion valve, (3) evaporator, and (4) compressor. In the heating mode, heat transfer QcQc occurs to the working fluid in the evaporator (3) from the colder outdoor air, turning it into a gas. The electrically driven compressor (4) increases the temperature and pressure of the gas and forces it into the condenser coils (1) inside the heated space. Because the temperature of the gas is higher than the temperature in the room, heat transfer from the gas to the room occurs as the gas condenses to a liquid. The working fluid is then cooled as it flows back through an expansion valve (2) to the outdoor evaporator coils.

The electrically driven compressor (work input WW) raises the temperature and pressure of the gas and forces it into the condenser coils that are inside the heated space. Because the temperature of the gas is higher than the temperature inside the room, heat transfer to the room occurs and the gas condenses to a liquid. The liquid then flows back through a pressure-reducing valve to the outdoor evaporator coils, being cooled through expansion. (In a cooling cycle, the evaporator and condenser coils exchange roles and the flow direction of the fluid is reversed.)

The quality of a heat pump is judged by how much heat transfer QhQh occurs into the warm space compared with how much work input WW is required. In the spirit of taking the ratio of what you get to what you spend, we define a heat pump’s coefficient of performance (COPhpCOPhp) to be

COPhp\=QhW.COPhp\=QhW.

15.37

Since the efficiency of a heat engine is Eff\=W/QhEff\=W/Qh, we see that COPhp\=1/EffCOPhp\=1/Eff, an important and interesting fact. First, since the efficiency of any heat engine is less than 1, it means that COPhpCOPhp is always greater than 1—that is, a heat pump always has more heat transfer QhQh than work put into it. Second, it means that heat pumps work best when temperature differences are small. The efficiency of a perfect, or Carnot, engine is EffC\=1−Tc/ThEffC\=1−Tc/Th; thus, the smaller the temperature difference, the smaller the efficiency and the greater the COPhpCOPhp (because COPhp\=1/EffCOPhp\=1/Eff). In other words, heat pumps do not work as well in very cold climates as they do in more moderate climates.

Friction and other irreversible processes reduce heat engine efficiency, but they do _not_ benefit the operation of a heat pump—instead, they reduce the work input by converting part of it to heat transfer back into the cold reservoir before it gets into the heat pump.

![A diagram of a heat pump (shown as a circle). Work W, indicated by a large, wavy orange arrow, is the total work put into the pump. Part of this work is done against friction and is lost in the form of frictional heat, Q sub f, to the cold reservoir. The portion of work that is used by the heat pump is represented by W prime. The pump transfers heat Q sub h, indicated by a large orange arrow, into the hot reservoir, a tan-colored rectangle, at temperature T sub h. Frictional heat Q sub f, indicated by a wavy orange arrow, is transferred to the cold reservoir, a blue rectangle at temperature T sub c. Heat Q sub c, indicated by a smaller wavy orange arrow, is transferred into the pump from the cold reservoir. Heat Q sub h is formed from a combination of W prime and Q sub c.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/8a8d775e28c11cfe26d7daee2f27bae4dc448a61)

Figure 15.28 When a real heat engine is run backward, some of the intended work input W W goes into heat transfer before it gets into the heat engine, thereby reducing its coefficient of performance COPhpCOPhp. In this figure, W ' W ' represents the portion of W W that goes into the heat pump, while the remainder of W W is lost in the form of frictional heat Q f Q f to the cold reservoir. If all of **WW** had gone into the heat pump, then QhQh would have been greater. The best heat pump uses adiabatic and isothermal processes, since, in theory, there would be no dissipative processes to reduce the heat transfer to the hot reservoir.

#### The Best _COP_ hp of a Heat Pump for Home Use

A heat pump used to warm a home must employ a cycle that produces a working fluid at temperatures greater than typical indoor temperature so that heat transfer to the inside can take place. Similarly, it must produce a working fluid at temperatures that are colder than the outdoor temperature so that heat transfer occurs from outside. Its hot and cold reservoir temperatures therefore cannot be too close, placing a limit on its COPhpCOPhp. (See [Figure 15.29](15-5-applications-of-thermodynamics-heat-pumps-and-refrigerators#import-auto-id1169738188695).) What is the best coefficient of performance possible for such a heat pump, if it has a hot reservoir temperature of 45.0ºC45.0ºC and a cold reservoir temperature of −15.0ºC−15.0ºC?

#### Strategy

A Carnot engine reversed will give the best possible performance as a heat pump. As noted above, COPhp\=1/EffCOPhp\=1/Eff, so that we need to first calculate the Carnot efficiency to solve this problem.

#### Solution

Carnot efficiency in terms of absolute temperature is given by**:**

EffC\=1−TcTh.EffC\=1−TcTh.

15.38

The temperatures in kelvins are Th\=318 KTh\=318 K and Tc\=258 KTc\=258 K, so that

EffC\=1−258 K318 K\=0.1887.EffC\=1−258 K318 K\=0.1887.

15.39

Thus, from the discussion above,

COP hp \= 1 Eff \= 1 0 . 1887 \= 5 . 30 , COP hp \= 1 Eff \= 1 0 . 1887 \= 5 . 30 ,

15.40

or

COP hp \= Q h W \= 5 . 30 , COP hp \= Q h W \= 5 . 30 ,

15.41

so that

Q h \= 5.30 W . Q h \= 5.30 W .

15.42

#### Discussion

This result means that the heat transfer by the heat pump is 5.30 times as much as the work put into it. It would cost 5.30 times as much for the same heat transfer by an electric room heater as it does for that produced by this heat pump. This is not a violation of conservation of energy. Cold ambient air provides 4.3 J per 1 J of work from the electrical outlet.

![The figure shows a schematic diagram of a heat pump. The hot and cold reservoirs are shown as two rectangular boxes attached to a vertical rectangular wall. The hot reservoir is at temperature T sub c equals negative fifteen degrees Celsius and the hot reservoir is at a temperature T sub h equals forty five degrees Celsius. Work W is shown to enter from an electrical outlet. Heat Q sub c is shown to enter the cold reservoir at an outside air temperature of negative five degrees Celsius and Q sub h is shown to leave the hot reservoir at an inside air temperature of twenty degrees Celsius.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/a3db350045752f1a0f8883bdf6694fe54e802b5a)

Figure 15.29 Heat transfer from the outside to the inside, along with work done to run the pump, takes place in the heat pump of the example above**.** Note that the cold temperature produced by the heat pump is lower than the outside temperature, so that heat transfer into the working fluid occurs. The pump’s compressor produces a temperature greater than the indoor temperature in order for heat transfer into the house to occur.

Real heat pumps do not perform quite as well as the ideal one in the previous example; their values of COPhpCOPhp range from about 2 to 4. This range means that the heat transfer QhQh from the heat pumps is 2 to 4 times as great as the work WW put into them. Their economical feasibility is still limited, however, since WW is usually supplied by electrical energy that costs more per joule than heat transfer by burning fuels like natural gas. Furthermore, the initial cost of a heat pump is greater than that of many furnaces, so that a heat pump must last longer for its cost to be recovered. Heat pumps are most likely to be economically superior where winter temperatures are mild, electricity is relatively cheap, and other fuels are relatively expensive. Also, since they can cool as well as heat a space, they have advantages where cooling in summer months is also desired. Thus some of the best locations for heat pumps are in warm summer climates with cool winters. [Figure 15.30](15-5-applications-of-thermodynamics-heat-pumps-and-refrigerators#import-auto-id1169737818608) shows a heat pump, called a “_reverse cycle”_ or “_split-system cooler”_ in some countries.

![A residential heat pump.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/88a0169cebf5b00fb187f81969bd2ef4f86c0a56)

Figure 15.30 In hot weather, heat transfer occurs from air inside the room to air outside, cooling the room. In cool weather, heat transfer occurs from air outside to air inside, warming the room. This switching is achieved by reversing the direction of flow of the working fluid.

### Air Conditioners and Refrigerators

Air conditioners and refrigerators are designed to cool something down in a warm environment. As with heat pumps, work input is required for heat transfer from cold to hot, and this is expensive. The quality of air conditioners and refrigerators is judged by how much heat transfer QcQc occurs from a cold environment compared with how much work input WW is required. What is considered the benefit in a heat pump is considered waste heat in a refrigerator. We thus define the coefficient of performance (COPref)(COPref) of an air conditioner or refrigerator to be

COP ref \= Q c W . COP ref \= Q c W .

15.43

Noting again that Qh\=Qc+WQh\=Qc+W, we can see that an air conditioner will have a lower coefficient of performance than a heat pump, because COPhp\=Qh/WCOPhp\=Qh/W and QhQh is greater than QcQc. In this module’s Problems and Exercises, you will show that

COP ref \= COP hp − 1 COP ref \= COP hp − 1

15.44

for a heat engine used as either an air conditioner or a heat pump operating between the same two temperatures. Real air conditioners and refrigerators typically do remarkably well, having values of COPrefCOPref ranging from 2 to 6. These numbers are better than the COPhpCOPhp values for the heat pumps mentioned above, because the temperature differences are smaller, but they are less than those for Carnot engines operating between the same two temperatures.

A type of COPCOP rating system called the “energy efficiency rating” ( EER EER ) has been developed. This rating is an example where non-SI units are still used and relevant to consumers. To make it easier for the consumer, Australia, Canada, New Zealand, and the U.S. use an Energy Star Rating out of 5 stars—the more stars, the more energy efficient the appliance. EER s EER s are expressed in mixed units of British thermal units (Btu) per hour of heating or cooling divided by the power input in watts. Room air conditioners are readily available with EER s EER s ranging from 6 to 12. Although not the same as the COPsCOPs just described, these EER s EER s are good for comparison purposes—the greater the EER EER , the cheaper an air conditioner is to operate (but the higher its purchase price is likely to be).

The EER EER of an air conditioner or refrigerator can be expressed as

EER \= Q c / t 1 W / t 2 , EER \= Q c / t 1 W / t 2 ,

15.45

where Q c Q c is the amount of heat transfer from a cold environment in British thermal units, t 1 t 1 is time in hours, W W is the work input in joules, and t 2 t 2 is time in seconds.

1.  _Examine the situation to determine whether heat, work, or internal energy are involved_. Look for any system where the primary methods of transferring energy are heat and work. Heat engines, heat pumps, refrigerators, and air conditioners are examples of such systems.
2.  _Identify the system of interest and draw a labeled diagram of the system showing energy flow._
3.  _Identify exactly what needs to be determined in the problem (identify the unknowns)_. A written list is useful. Maximum efficiency means a Carnot engine is involved. Efficiency is not the same as the coefficient of performance.
4.  _Make a list of what is given or can be inferred from the problem as stated (identify the knowns)_. Be sure to distinguish heat transfer into a system from heat transfer out of the system, as well as work input from work output. In many situations, it is useful to determine the type of process, such as isothermal or adiabatic.
5.  _Solve the appropriate equation for the quantity to be determined (the unknown)._
6.  _Substitute the known quantities along with their units into the appropriate equation and obtain numerical solutions complete with units._
7.  _Check the answer to see if it is reasonable: Does it make sense?_ For example, efficiency is always less than 1, whereas coefficients of performance are greater than 1.
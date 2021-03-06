import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import { MainGridContainer } from "../styles";

const Manifest = () => {
  return (
    <React.Fragment>
      <MainGridContainer>
        <Container>
          <Segment textAlign="center">
            <Header as="h1">Manifiesto</Header>
            <p>
              Con el fin de explicar la motivación de este pequeño experimento,
              las personas que hemos hecho posible este &quot;Conteo de votos
              CrowdSourcing&quot; manifestamos lo siguiente:
            </p>
            <p>
              En el marco de las elecciones presidenciales de El Salvador
              realizadas el 9 de Marzo 2014, surgió una idea con propósito
              meramente educativo: desarrollar una aplicación web que permitiera
              a los/as usuarios/as realizar el conteo de los votos de manera
              colaborativa, totalmente independiente, imparcial y anónima.
            </p>
            <p>
              Esta necesidad ha vuelto a ser demandada tras los señalamientos de
              manipulación de los datos del escrutinio preliminar en las
              elecciones legislativas y municipales del 4 de Marzo de 2018,
              suceso que fue justificado por el Tribunal Supremo Electoral con
              las declaraciones dadas por la empresa proveedora de la solución
              informática, Smartmatic, en cuanto al descubrimiento de un error
              en un script de la aplicación que asignaba incorrectamente las
              preferencias para diferentes diputados/as en los departamentos de
              La Libertad y San Salvador.
            </p>
            <p>
              Como materialización de esta idea, en 2014 se desarrolló un
              aplicativo informático que en este 2018 se ha mejorado y adaptado
              para el procesamiento de las actas de los recientes comicios, cuyo{" "}
              <a href="https://github.com/mxgxw/crowdvalidation/tree/contemos2018">
                código fuente{" "}
              </a>
              (las instrucciones que le permiten funcionar en un computador),
              base de datos e información de diseño está disponible de manera
              totalmente libre, gratuita, accesible públicamente a través de
              Internet para que se le dé el uso que se considere pertinente.
            </p>
            <p>
              Este aplicativo se ha realizado a través del aporte voluntario de
              muchas personas impulsadas por el deseo de aprender y colaborar en
              la creación de una solución tecnológica a un problema actual de
              nuestra sociedad: la pérdida de la credibilidad en las tecnologías
              utilizadas por el Tribunal Supremo Electoral, lo que daña
              igualmente la confianza en el respeto a la voluntad del pueblo
              expresada a través del voto. Quienes hemos colaborado en el
              desarrollo de esta aplicación declaramos en todo caso que no
              poseemos ninguna afiliación político-partidista, ni buscamos
              apoyar a ninguno de los partidos o candidatos/as en contienda
              electoral del presente, pasado o futuro, y mucho menos esperamos
              obtener algún tipo de beneficio económico de esta labor: es
              precisamente por ello que tanto la aplicación como todos los datos
              son de libre acceso y completamente auditables por cualquier
              persona. El acceso al equipo de trabajo sigue abierto a quien
              quiera involucrarse activamente, solo debe enviar un correo a la
              siguiente dirección para que le proporcionemos más información:
            </p>
            <p>
              <a href="mailto:info@contemosnosotros.org">
                info@contemosnosotros.org
              </a>
            </p>
            <p>
              También se declara que todos los datos presentados en esta
              aplicación se han obtenido de la información accesible al público
              de la plataforma de conteos en línea del Tribunal Supremo
              Electoral, sin embargo, no se puede garantizar de ninguna manera
              que las actas obtenidas sean una fiel representación de las
              originales, ni siquiera que estén completas y, por tanto: todo
              resultado obtenido de esta plataforma se deberá considerar
              orientativo y no deberá otorgársele mayor validez que el de un
              ejercicio educativo experimental.
            </p>
            <p>
              A continuación explicamos brevemente el funcionamiento de esta
              aplicación:
            </p>
            <p>
              Esta plataforma se basa en la premisa de que no hay una digitación
              correcta o incorrecta, sino que el grado de certeza en la validez
              del conteo del acta se deriva del número de veces que distintas
              personas usuarias de la plataforma digitan el conteo igual. De
              esta manera, el &quot;dato&quot; correcto corresponde a la
              digitación cuya frecuencia de ingreso al sistema es mayor.
            </p>
            <p>
              Por ejemplo: si un conteo tiene 3 digitaciones con 116 y 1
              digitación con 106, se esperaría que el número correcto sea 116.
            </p>
            <p>
              Lo especial de esta metodología es que cuantos más datos se hayan
              ingresado más confiable se considera la digitación, y también
              evita que personas mal intencionadas puedan altear los resultados
              del conteo pues no bastaría con que se agregara un resultado
              incorrecto a una sola entrada de registro, sino que se tendría que
              agregar el mismo valor incorrecto a la misma entrada de registro y
              así con muchos otros registros.
            </p>
            <p>
              Cabe agregar que la plataforma toma medidas especiales para
              prevenir lo anterior mostrando los conteos en papel al azar y sin
              mostrar a qué partido/candidatura pertenecen. De esta manera
              alguien mal intencionado no tiene forma de saber si el valor que
              va a &quot;inflar&quot; o &quot;reducir&quot; pertenece al
              partido/candidatura de su predilección o no.
            </p>
            <p>
              La hipótesis que se espera validar al finalizar este ejercicio,
              además de poder contrastar los resultados que publique el T.S.E.,
              es que serán un mayor porcentaje de personas usuarias las que
              ingresarán digitaciones correctas al porcentaje de las que
              ingresen digitaciones incorrectas, verificándose cada acta
              mediante un proceso totalmente anónimo e imparcial y basado en la
              &quot;sabiduría de la colectividad&quot;
            </p>
            <p>
              El código fuente de la aplicación está disponible para quien desee
              revisarlo y proponer mejoras a través de la siguiente dirección:
            </p>
            <p>
              <a
                href="https://github.com/mxgxw/crowdvalidation/tree/contemos2018"
                target="_blank"
              >
                https://github.com/mxgxw/crowdvalidation/tree/contemos2018
              </a>
            </p>
            <p>
              Adicionalmente se publican los <em>&quot;dump/volcados&quot;</em>{" "}
              de bases de datos del sistema, estos son archivos que contienen
              copias &quot;integras&quot; de los datos recolectados a través de
              la plataforma desde que inició su funcionamiento en de la
              siguiente dirección:
            </p>
            <p>
              <a href="http://contemosnosotros.org/sqldumps/">
                http://contemosnosotros.org/sqldumps/
              </a>
            </p>
            <p>
              Esperamos que esta iniciativa sea de su interés, agradeciendo a
              todas las personas que han colaborado con el desarrollo y
              funcionamiento de la misma.
            </p>
          </Segment>
        </Container>
      </MainGridContainer>
    </React.Fragment>
  );
};

export default Manifest;

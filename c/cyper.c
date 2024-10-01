#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <time.h>

#define IsChar (message[i] >= 'A' && message[i] <= 'Z')

void
Cypher(int masterKey[], char *message, int m_len)
{
	for (int i = 0; i < m_len; ++i)
		message[i] = toupper(message[i]);

	for (int i = 0; i < m_len; ++i) {

		if (message[i] + masterKey[i] > 'A' && IsChar) {
			masterKey[i] -= ('A' - message[i]);
			message[i] = 'A';
		}

		message[i] += masterKey[i];
		printf("%c", message[i]);
	}
}

int
main(int argc, char **argv)
{
	srand(time(NULL));

	char *message = malloc(64 * sizeof(char));
	printf("Enter message: ");
	fgets(message, 64, stdin);

	int m_len = strlen(message);
	int masterKey[m_len];

	for (int i = 0; i < m_len; ++i)
		masterKey[i] = rand() % 10;
	
	Cypher(masterKey, message, m_len);

	free(message);

//	for (int i = 0; i < m_len; ++i)
//		printf("%d", masterKey[i]);
}

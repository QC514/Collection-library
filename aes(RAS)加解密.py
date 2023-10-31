import base64
from Crypto.Cipher import PKCS1_v1_5 as Cipher_pkcs1_v1_5, AES
from Crypto.PublicKey import RSA
from Crypto.Util.Padding import pad

# 请求数据加密
publicKey = '''-----BEGIN RSA PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA49jxpFBAoEslNYrHb0wT8nCpGBn3hvjgToNkp7lFpsSeRS7WbHoFJEvmf1U83cHrbTzRFRowPft/FGBw6/6dZcmMjMgz1n0FWlqk0d7QjEDL+t9Dj9tH9e/qdGfJ3bzR0ZgpgQMpKpx5I5fcEgzMYnHWGLZBY+v+PlPTN/1mz0nnRtIIxb8YuZZFvadfGTC8jeD7tMERpd5zENml5cLbVujENsag9AIpvLdvR6fSewi3l9QmssWpty50UpcAWsvAs+ExRYyUe/s1lwfSdSciW6Lrj4sp4MMaWifdTQUbKKEeuRugEqJSDrxhxoybEbSbl2CYaTR8kifZ1n+lcAh6cQIDAQAB
-----END RSA PUBLIC KEY-----'''

privateKey = '''-----BEGIN RSA PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDj2PGkUECgSyU1isdvTBPycKkYGfeG+OBOg2SnuUWmxJ5FLtZsegUkS+Z/VTzdwettPNEVGjA9+38UYHDr/p1lyYyMyDPWfQVaWqTR3tCMQMv630OP20f17+p0Z8ndvNHRmCmBAykqnHkjl9wSDMxicdYYtkFj6/4+U9M3/WbPSedG0gjFvxi5lkW9p18ZMLyN4Pu0wRGl3nMQ2aXlwttW6MQ2xqD0Aim8t29Hp9J7CLeX1Cayxam3LnRSlwBay8Cz4TFFjJR7+zWXB9J1JyJbouuPiyngwxpaJ91NBRsooR65G6ASolIOvGHGjJsRtJuXYJhpNHySJ9nWf6VwCHpxAgMBAAECggEBANhcVTI8BvJwCThrvXBhpPtuohPB7Lxdrtq/iKCAnbR8NvLpRDKkOCe8b3fw4CiQkdgcjUrloHPrU0RtRC3FjX9vwaiaICeIdsHTG3ozhIP6r/hddJGxoAbZuSCqwhVuzSuju53H+5p8FciH1zHIt3iwMqcqwrN5EOfsv8EGP0+MSn8PYDVarUx1mQzJKs4iLQ6XIZlizp7WeH3RWW78zvpLnj5BcFNyR0zanf/tV8cZvVJ5A/Za5Uj2b9O4IBdriBUduCjNz9p/02cxdVxu9A1JYkyP9sYNha9zkRs+F68OhBdmptX6/LFMWENiTNDHxmkRGlBrAbA4oe4tMn4eiEUCgYEA89/AV/t+1Bq0xYX8Eim8EXgQ9r8jKzTqaevjzXGW3AuaWbg5PlETQcPLV9oMobRg2xqV4y/hm7rc275/nm2xQ24Zhu+xMZ8M+MqcxhpwuERAcTT1OHI3uQFZTq73CKo/GQX408e3okEZtt3CF6kxbYfiqvJ65o3FaFh+NAfzTm8CgYEA7y0xEE7uQuNkkc0o3F2/ulbcF4jB9KJvYDDFZAWW/MBlj5QnamhP9GDbKi4AMC1+L1gNDznrtiMBAPWyyjxl9HPVC7KIIxjkMUryuEgVwsywSbLfzyQYhat8Cmdhcko67iywX7dlgczM2qcP5FtLB2Oz7uF8v/uc8zbrH8V7NR8CgYAD4ZS7EbqT/5TO6/H2DAn9MS777lDN+Dqe0u0+MMeY2upq8R6gGkQ3MLmEvWikDi3YbtTh17o8cz3elWqMh+xhSVhIqHnmc0SOlRLnqDYRCK0J4DDi5BZ08EuOkARIdAUrDchG/o+ymlyhZ2gWXk/2EUqPM+q2zpzMq1Pe2h2KKwKBgCtaLqV9GRTIsMb4v+pJl+IHsncVk8pq0vNFg9HgbYC8wuvmd8qCw9NQ5wjbM6+H33JnbF6RKhdmet0Yq+KaVgScJkargp+R+HKy2hHrBv67KU0CfizGpyc7cQ1VtcUIjWv0b7e5v01quMr9MxU6MvxQ5yFqf7kwuz8eejnVCsMTAoGALBNEx3hWwpWSr9+c+wiDMR8VjVYRFDJqhq869UtLMv2MrESR1VVAQOIeQK+sHriuVCZsh/ZDqyj54AN0BUIZc5tqecCZd2xXMVyQ8f/sdHztlglnqxH12Vg8DA7JK1oBDw4hQjXx/WMrjsUp7Ktp15bfo+qzIvwphlpaoGP0H/k=
-----END RSA PRIVATE KEY-----'''

# 返回数据解析
res_publicKey = """-----BEGIN RSA PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA49jxpFBAoEslNYrHb0wT8nCpGBn3hvjgToNkp7lFpsSeRS7WbHoFJEvmf1U83cHrbTzRFRowPft/FGBw6/6dZcmMjMgz1n0FWlqk0d7QjEDL+t9Dj9tH9e/qdGfJ3bzR0ZgpgQMpKpx5I5fcEgzMYnHWGLZBY+v+PlPTN/1mz0nnRtIIxb8YuZZFvadfGTC8jeD7tMERpd5zENml5cLbVujENsag9AIpvLdvR6fSewi3l9QmssWpty50UpcAWsvAs+ExRYyUe/s1lwfSdSciW6Lrj4sp4MMaWifdTQUbKKEeuRugEqJSDrxhxoybEbSbl2CYaTR8kifZ1n+lcAh6cQIDAQAB
-----END RSA PUBLIC KEY-----
"""
res_privateKey = '''-----BEGIN RSA PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCaKMrIwU9els3xVszLtzvCJT+Kc8mosvygguXo0f+IqjSxvfCNbtobxIckxkBK7ipY8CK9k8WjcSsyIUd132CsGvFoUejD+sf+53wEy4z1YOgeoatll5/wMFGGZfDEyRbYd7WGTGPBZ6goENqplN5AJW6fIq8SskWZa59uq1E3Q9rM8iLg3n+955xvEb412vmTPsEWYL2qc6HUpEFxpXAg+CWjthYihZKkeOgQFr9LV3sB5bRAgtoXf/dnuWMK1jg4z7efaAxxNovQfRWXDEcgiRONmuS+l+M2y3YoPt1EFYSOZuU5GepuPPDFMxoLJ1CE2pk20ZUFIrgOisSICnkdAgMBAAECggEAKjVxEHadXLC9wo6ZlE2fNxErzKTXWjFnqiss+ApHhQvVUbVH3/GyFlhBCHifseR0A9X8LRwAyTd7NEaYYlW/CmB2KLIEoWRQziJjeoyhE65s37Y0T6SsTf9s0vembLsCXlKoiRTxW0seZ5n1xOjV0YpuN3Qvq1bUZ6VoCc0ud4rU09gDI8nDEkS0sBZbV8wVxpksoksX7YdpgJtqCMezOdnY9LqWiC0Y1km9szaNRr3X5rGTVJ+ZnTu2votXdKCMzVLXE/hm2eMRAk2droOzwKFLYlijZZg7m1SfNWlSCEelPKPRmv2RnoIGXn6EvqXLLT4zg4iOzh0dRrvT+BLloQKBgQD7b/x8aLfVvv5/dBFDN6exXpSY3gvsXhb3GhE/DO8dHRN1qcJt2ocriJEbZnD5F2DAQIT+DdG1Uihg9bTinDbhtilG1PdWQIqIcxRbMiJjtWIIEkTpFVnShZ4VNe56lseAAxAPG8z5Wzy25HiIUovnH5CiZiKesqRbkILjsrtiowKBgQCc9OpdmS38HSizOZ4Mieg3nkCm+OCZQAuIQqokALUC/Gb8sae2ZO6GGtdr6+Xo8B/WMlkmapNEFqSSE3xepjR9O1J9efvp3BJ2j/1UTO0NPlcm0lyijG3epqx8iaWJWF2wezs9w5qZtFUve/5um88ztbuhMNbgFdVIPGN9BoQxPwKBgQCCaqayvPpFkwicgU6G5/JCLMW0uM/EbVVKHCo/4uyP1EoIqOHhawzbhr2FUdBdU0Pq1ExnHjHc891f1XJabB6HWp30UHhuM5HnjpFLcCioQSe0+gzmPR3W9Vl2tP+adGTMQEpvG8Nov2sxjjX6t547ZoL1yTZBzHU1zTIm+sj5MwKBgAhcV3ui5DswxnE9mXirg+4qhOEgEr63FaYtfuiqDPpavZWqVPe3SqlkFqOODlIpMFj1l6AfPzb6ScvqM87K5bLiDRPYAp5DdcxRATqTWnFBJ91OiVazSkr47+k2X9YAGgWDmvVATSTw4TTFUxlLPW9Qt+zvMBMBtrnBVb9cMIB7AoGALNeRpqZKdjbvklQLMDnKyV7p9wuz669SX4LPODcMqf8q0wsL8/0jWTuyyePr8z+V/BI2SVHcT3CaBsmnNRU739DXLAcQ4R2d6Ak5zmmJrOcWl1QiQIcNZUp+fGEBTOl3YOxIFryGX15MocX6bE9JXj4k2L6P7XlfoLAme4801bI=
-----END RSA PRIVATE KEY-----'''


data_1 = {"encryptKey":"kZsK8lZ9p2ojOvVD9FEdQNbACeg0t8M4YOnijngiMUNY3p+tFxkdTKEPMar2XZrDRqeqTsBzbEM2qCBmYXIgVf/K0rWLbWA72h7sP2m2PmvnwcFSl6NvDh+vhZyBqOykrEl2utLlwFx1nOBqNxEbLoR8RqILTsRa5GdtlrApr+TF938BRNnVoXJR0P5+X2+194JQnjzagwYEleGRtHV3XOjFBDL2felNApnJ2aLcKCIF2IM8EeGRYU8QpM8rl4aSL/7C3X4QC80OaqvS1zbCYdRRcRhQXkuFHstn5inPL+4j5caBhcUfQd8tEWVUsNcYdOCogaeEwy4Er8ITeHn3RA==","encryptData":"QwA8jmkhqKP1L6uf/SZf5g=="}


encryptKey = data_1['encryptKey']
encryptData = data_1['encryptData']


#RSA 加密方法
def rsa_ecrypt():
    # 加密方
    ecrypt_text = 'ajgekbmgfkasefqk@DS@cd1d955be8e4c11a'.encode('utf8')
    pub_key = RSA.importKey(publicKey)
    cipher = Cipher_pkcs1_v1_5.new(pub_key)
    rsa_text = base64.b64encode(cipher.encrypt(ecrypt_text))
    print(rsa_text)
    return rsa_text

# RSA 解密方法
def rsa_decrypt():
    # 加密的数据
    ciphertext = encryptKey
    print(privateKey)
    # 请求解密
    # private_key = RSA.importKey(privateKey)
    # 返回解密
    private_key = RSA.importKey(privateKey)
    cipher = Cipher_pkcs1_v1_5.new(private_key)
    plaintext = cipher.decrypt(base64.b64decode(ciphertext),None)
    print(plaintext.decode('utf8'))
    return plaintext.decode('utf8')

# 非对称AES加密
def aes_encrypt():
    key = '27czygby174toajw'
    vi = 'gj40819yc7qmjux4'

    data = '''{"subjectId":"1651538844278808578","subjectType":"POST"}'''
    data = pad(data.encode('utf8'), 16)
    cipher = AES.new(key.encode('utf8'), AES.MODE_CBC, vi.encode('utf8'))
    encryptedbytes = cipher.encrypt(data)
    # 加密后得到的是bytes类型的数据，使用Base64进行编码,返回byte字符串
    encodestrs = base64.b64encode(encryptedbytes)
    # 对byte字符串按utf-8进行解码
    enctext = encodestrs.decode('utf8')
    print(enctext)
    return enctext

# 对称加密AES 解密
def aes_decrypt(key,vi):
    print(key,vi)
    data = encryptData
    data = data.encode('utf8')
    key = key
    vi = vi
    encodebytes = base64.decodebytes(data)
    # 将加密数据转换位bytes类型数据
    cipher = AES.new(key.encode('utf8'), AES.MODE_CBC, vi.encode('utf8'))
    text_decrypted = cipher.decrypt(encodebytes)
    print(text_decrypted.decode('utf8'))
    return text_decrypted


# aes_encrypt()
# rsa_ecrypt()

plaintext = rsa_decrypt()
print('11111'+plaintext)

key = plaintext.split('@DS@')[0]
vi = plaintext.split('@DS@')[1]
aes_decrypt(key,vi)




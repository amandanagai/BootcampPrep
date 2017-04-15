def add(a,b):
    return a+b

def once(n1, n2, add):
    add.is_called = False
    def inner(n1, n2, add):
        if not(add.is_called):
            add.is_called = True
            return add(n1, n2)
    # print(inner)
    return inner

print(once(2,2,add))
print(once(2,4,add))


